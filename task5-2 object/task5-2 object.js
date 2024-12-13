/*1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın*/
function Car(marka,model,year,engine){
    this.marka=marka;
    this.model=model;
    this.year=year;
    
}
const car1=new Car("HUNDAI","ACCENT","2014");
console.log(car1);
const car2=new Car("Chevrolet","crucz","2015");
console.log(car2);
const car3=new Car("HUNDAI","Essent","2017");
console.log(car3);


/*2. size bir obyekt veriləcək.Həmin obyekti referansı ilə birlikdə kopyalayıb ikinci obyektə mənimsədin.İkinci obyektin name xüsusiyyətini,birinci obyektin username xüsusiyyətini dəyişin.Baş verən dəyişikliklər barədə öz fikirlərinizi yazın*/
const user1 = {
    name: "Yusif",
    username: "Aliyev",
    email: "Yusif@gmail.com",
    city: "Ganja",
    }
const user2 = user1;
user2.name="camal";
user2.username="Aliyev";
user2.email="Yusif@gmail.com",
console.log("user1:",user1);
console.log("user2:",user2);



/*3. Object.assign() metodunu istifadə edin və nə işə yaradığı barədə məlumat yazın*/

/*4. Spread və rest operatorları arasındakı fərqi izah edin.Hər ikisinin istifadəsinə aid nümunələr yaın*/



/*6. Heap və stack haqqında məqalə yazın*/

/*7. existsAndTruthy() adinda funksiya yaradin. 2 ədəd argument alır: obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes:
existsAndTruthy({a:1,b:2,c:3},'b') // true

existsAndTruthy({x:'a',y:null,z:'c'},'y') // false (obyektde 'y' var amma falsy-di ona gore false)
existsAndTruthy({x:'a',b:'b',z:undefined},'z') // false (obyektde 'z' yoxdu ona gore false)*/