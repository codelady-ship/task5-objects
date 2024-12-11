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
  dogumTarixi:""
}
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
  adGunu:"15.05.2001",
  pulu:25000
 }
 setAge(bank.yas)
 document.write(` pensiyaya qədər
qalan illərin məbləğini ${ getYearsBeforeRetirement(bank.pulu)}dir`)
/*Tapşırıq-04
Kalkulyator obyekti yaradın.
Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
  - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin. */ 

/*Tapşırıq-05. propertyTaker() adında funksiya yaradın. Arqument kimi obyekt (obj) və string (proprtyName) alsin. Hemin obyektin verdiyim propertyni ekrana cixarsin. Mes:

propertyTaker({ qitə: 'Asiya', ölkə: 'Yaponiya'}, 'qitə') // 'Asiya'
propertyTaker({ ölkə: 'İsveç', qitə: 'Avropa'}, 'ölkə') // ' İsveç'
propertyTaker({ad:'roma', yaş:12}, 'ad') // 'roma'*/