/*Tapşırıq-01
Konsola doğum tarixini çıxarın.
Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (ad, gender, birthday).
Konsola doğum tarixini çıxarın.*/
const person ={
  ad:"Ayten",
  cins: "woman",
  dogum_tarixi:"23.12.2000"
}
document.write (`${person.ad}nin dogum tarixi ${person.dogum_tarixi}-dur <br/>`)


/*Tapşırıq-02
Obyektə yaş (yaş) əlavə edin və doğum tarixi silin.
İstifadəçi olan bir obyekt verilib.
Bu obyektə yaş (yaş) əlavə edin və doğum tarixini silin.
Alınmış obyekti konsola çıxarın.*/

const uzv={
  yasi:25,
  dogumTarixi:"23.12.2000"
}
console.log(uzv)
uzv.ad
delete.uzv  
document.write(`uzvun yasi ${uzv.yasi}dir`)


/*Tapşırıq-03
Obyektə metodlar əlavə edin.let
Obyekt verilib. Ona yeni metodlar əlavə edin:
  setAge - istifadəçi yaşını dəyişdirən metoddur.
  getYearsBeforeRetirement - pensiyaya qədər
qalan illərin məbləğini qaytaran metoddur.
Bu metodları çağırın.*/
const bank={
  member:"Eli",
  yas:25,
  setAge:function(age){
    thid.yas=age
  }
 }
 
/*Tapşırıq-04
Kalkulyator obyekti yaradın.
Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
  - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin. */ 
const operator{
  o1:"+",
  o2:"-",
  o3:"*",
  o4:"/",
}
function calculate(n1,n2,o)
    if(operator.o1)
      document.write(`${n1}+${n2}=${n1+n2}<br/>`);
    else if(operator.o2)
      document.write(`${n1}-${n2}=${n1-n2}<br/>`);
    else if(operator.o3){
      document.write(`${n1}*${n2}=${n1*n2}<br/>`);
    }else if(operator.o4)
      if(operator.o4 && n2=== 0 ){
      document.write("0-ra bolme mumkun deyil")
    }
     else if(
     document.write(`${n1}/${n2}=${n1/n2}<br/>`);
    )else{"duzgun deyer yaz. <br/>"};
 console.log{calculate}
/*Tapşırıq-05. propertyTaker() adında funksiya yaradın. Arqument kimi obyekt (obj) və string (proprtyName) alsin. Hemin obyektin verdiyim propertyni ekrana cixarsin. Mes:

propertyTaker({ qitə: 'Asiya', ölkə: 'Yaponiya'}, 'qitə') // 'Asiya'
propertyTaker({ ölkə: 'İsveç', qitə: 'Avropa'}, 'ölkə') // ' İsveç'
propertyTaker({ad:'roma', yaş:12}, 'ad') // 'roma'*/
function propertyTaker() 