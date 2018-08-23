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

