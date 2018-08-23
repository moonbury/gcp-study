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
