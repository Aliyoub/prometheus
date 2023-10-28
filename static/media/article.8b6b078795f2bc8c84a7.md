<br /><br />
### INTRODUCTION
<p class="introduction"> lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.</p>

### 1. INSTALLATION
<span style="color:#E6522B; font-size:22px"> Mise à jour des paquets </span>
<Code language="bash">
sudo apt-get update
</Code>

<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/apt-get-update.png" style="width:100%; "/>


<span style="color:#E6522B; font-size:22px"> Installation de Prometheus </span>
<Code language="bash">
sudo apt-get install prometheus
</Code>

<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/apt-get-install-prometheus.png" style="width:100%; "/>


<span style="color:#E6522B; font-size:22px">Instanciation de la machine virtuelle (sur Virtualbox)</span>
<Code language="bash">
sudo vagrant up
</Code>

<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/vagrant-up.png" style="width:100%; "/>

<span style="color:#E6522B; font-size:22px">Affichage de la machine virtuelle définie depuis le fichier Vagrantfile</span>
<Code language="bash">
sudo vagrant virtualbox
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-in-virtualbox.png" style="width:100%; "/>


<span style="color:#E6522B; font-size:22px">Accès à la machine virtuelle par ssh</span>
<Code language="bash">
sudo vagrant ssh prometheus
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/vagrant-ssh-prometheus.png" style="width:100%;"/>


<span style="color:#E6522B; font-size:22px">Démarrage de Prometheus</span>
<Code language="bash">
sudo systemctl start prometheus
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-start.png" style="width:100%;"/>

<span style="color:#E6522B; font-size:22px">Vérification de l'état du service Prometheus</span>
<Code language="bash">
sudo systemctl status prometheus
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-status.png" style="width:100%;"/>

<span style="color:#E6522B; font-size:22px">Affichage de l'interface Prometheus</span><br /><br />
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-interface.png" style="width:100%;"/>


<Code language="javascript">
//strings
const names = ["Seema", "Rekha", "Jaya"];
names.sort();
//[sudo apt-get update]

//Numbers
const numbers = [101, 8, 87];
numbers.sort((a, b) => {
  return a - b;
});
//[ 8, 87, 101 ]
</Code>

2. Select a random element

<Code language="javascript">
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
</Code>

3. Reverse a string

<Code language="javascript">
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
</Code>

4. Check if element has a class

<Code language="javascript">
const element = document.querySelector("#element")
element.classList.contains("active")
</Code>

5. String interpolation

<Code language="javascript">
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
</Code>

6. Loop through an array

<Code language="javascript">
const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
  console.log(car)
}

/*
Ford
BMW
Audi
*/
</Code>

7. Get current time

<Code language="javascript">
const date = new Date()
const currentTime = 
  `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`

console.log(currentTimes)
//example output: "22:16:41"
</Code>

8. Replace part of a string

<Code language="javascript">
const string = "You are awesome."
const replacedString = string.replace("You", "We")

console.log(replacedString) //Output: "We are awesome"
</Code>

9. Destructing variable assignment

<Code language="javascript">
let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
</Code>

10. Using the spread operator

<Code language="javascript">
let data = [1,2,3,4,5];
console.log(...data);
//  1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
</Code>
