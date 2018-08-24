## common gcp console commands


set global variables
```
touch config
echo INFRACLASS_REGION=asia-east1 >> config
echo INFRACLASS_PROJECT_ID= >> config

echo $INFRACLASS_REGION
source config
```

auto set when login
```
nano .profile
source ~/.config
```

change to other project in cloud shell
```
gcloud config set project $PROJECT_ID
```

## check vm commands

unused and used memory and swap space
```
free
```
details about the RAM
```
sudo dmidecode -t 17
```
verify the number of processors
```
nproc
```
details about the CPUs
```
lscpu
```

### screen

we can use screen instead of &
```
sudo apt-get install -y screen
sudo screen -S mcs java -Xms1G -Xmx7G -d64 -jar /home/minecraft/minecraft_server.1.11.2.jar nogui
```

### Minecraft 

Minecraft server source
```
sudo wget https://s3.amazonaws.com/Minecraft.Download/versions/1.11.2/minecraft_server.1.11.2.jar
```

Run the server
```
sudo screen -S mcs java -Xms1G -Xmx7G -d64 -jar /home/minecraft/minecraft_server.1.11.2.jar nogui
```

backup script, connect to your bucket
```
#!/bin/bash
screen -r mcs -X stuff '/save-all\n/save-off\n'
/usr/bin/gsutil cp -R ${BASH_SOURCE%/*}/world gs://${YOUR_BUCKET_NAME}-minecraft-backup/$(date "+%Y%m%d-%H%M%S")-world
screen -r mcs -X stuff '/save-on\n'
```


### Maintenance
since there are maintenance period in gcp, it will stop your server. Need to auto mount the disk and run the scripts.
To do so, edit the VM and create a custom metadata with 
key: ```startup-script```
value:
```
#!/bin/bash
mount /dev/disk/by-id/google-minecraft-disk /home/minecraft
(crontab -l ; echo "0 */4 * * * /home/minecraft/backup.sh")| crontab -
cd /home/minecraft
screen -d -m -S mcs java -Xms1G -Xmx7G -d64 -jar minecraft_server.1.11.2.jar nogui
```
key: ```shutdown-script```
value: 
```
#!/bin/bash
sudo screen -r -X stuff '/stop\n'
```
