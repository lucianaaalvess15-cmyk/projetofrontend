
const form = document.querySelector("#cadastroForm");
if (form) {
  const cpf = document.querySelector("#cpf");
  const telefone = document.querySelector("#telefone");
  const cep = document.querySelector("#cep");

  function onlyDigits(value){ return value.replace(/\D/g,""); }
  function setError(id,msg){ document.querySelector(id).textContent = msg || ""; }

  function formatCPF(value){
    value=onlyDigits(value).slice(0,11);
    return value.replace(/(\d{3})(\d)/,"$1.$2")
      .replace(/(\d{3})(\d)/,"$1.$2")
      .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  }
  function formatPhone(value){
    value=onlyDigits(value).slice(0,11);
    if(value.length<=10) return value.replace(/(\d{2})(\d)/,"($1) $2")
      .replace(/(\d{4})(\d)/,"$1-$2");
    return value.replace(/(\d{2})(\d)/,"($1) $2")
      .replace(/(\d{5})(\d)/,"$1-$2");
  }
  function formatCEP(value){
    return onlyDigits(value).slice(0,8).replace(/(\d{5})(\d)/,"$1-$2");
  }
  function validCPF(v){
    v=onlyDigits(v);
    if(v.length!==11 || /^(\d)\1+$/.test(v)) return false;
    let sum=0;
    for(let i=0;i<9;i++) sum+=+v[i]*(10-i);
    let d1=(sum*10)%11; if(d1===10)d1=0;
    if(d1!==+v[9]) return false;
    sum=0;
    for(let i=0;i<10;i++) sum+=+v[i]*(11-i);
    let d2=(sum*10)%11; if(d2===10)d2=0;
    return d2===+v[10];
  }

  cpf.addEventListener("input",()=>cpf.value=formatCPF(cpf.value));
  telefone.addEventListener("input",()=>telefone.value=formatPhone(telefone.value));
  cep.addEventListener("input",()=>cep.value=formatCEP(cep.value));

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let ok=true;
    setError("#nomeError",""); setError("#cpfError",""); setError("#telefoneError","");
    setError("#cepError",""); setError("#emailError",""); setError("#termosError","");
    const nome=document.querySelector("#nome").value.trim();
    const email=document.querySelector("#email").value.trim();
    const termos=document.querySelector("#termos").checked;
    if(nome.length<3){setError("#nomeError","Informe seu nome completo.");ok=false}
    if(!validCPF(cpf.value)){setError("#cpfError","CPF inválido.");ok=false}
    if(onlyDigits(telefone.value).length<10){setError("#telefoneError","Telefone inválido.");ok=false}
    if(onlyDigits(cep.value).length!==8){setError("#cepError","CEP inválido.");ok=false}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError("#emailError","E-mail inválido.");ok=false}
    if(!termos){setError("#termosError","É necessário aceitar os termos.");ok=false}
    if(ok){
      document.querySelector("#success").style.display="block";
      form.reset();
      window.scrollTo({top:0,behavior:"smooth"});
    }
  });
}
