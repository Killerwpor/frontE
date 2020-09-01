git pull
start cmd /c "ng build"
pause
pscp -i C:\Users\killerwpor\Desktop\Dream-House\Feria-del-diseno\Credenciales\credencialesFD.ppk -r C:\Users\killerwpor\Desktop\Dream-House\Explora\dist\test\* ubuntu@ec2-18-220-134-88.us-east-2.compute.amazonaws.com:/opt/front-end
pause