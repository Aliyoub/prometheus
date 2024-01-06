# PROMETHEUS
## INSTALLATION SUR UBUNTU 20.04
### MISE EN PLACE DE LA MACHINE VIRTUELLE PAR VAGRANT ET VIRTUALBOX

#### Instanciation de la machine virtuelle
> _sudo vagrant up_

![alt machine virtuelle instance](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/vagrant-up.png)

#### Affichage de la machine virtuelle définie depuis le fichier Vagrantfile
> _sudo vagrant virtualbox_

![alt machine virtuelle Virtualbox](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-in-virtualbox.png)

#### Accès à la machine virtuelle par ssh
> _sudo vagrant ssh prometheus_

![alt machine virtuelle Virtualbox](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/vagrant-ssh-prometheus.png)

#### Mise à jour des paquets
> _sudo apt-get update_

![alt mise à jour paquets](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/apt-get-update.png)

#### Installation de Prometheus
> _sudo apt-get install prometheus_

![alt Installation de Prometheus](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/apt-get-install-prometheus.png)

#### Démarrage de Prometheus
> _sudo systemctl start prometheus_

![alt Démarrage de Prometheus](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-start.png)


#### Vérification de l'état du service Prometheus
> _sudo systemctl status prometheus_

![alt Vérification de l'état du service Prometheus](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-status.png)


#### Affichage de l'interface Prometheus
![alt Affichage de l'interface Prometheus](https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-interface.png)
