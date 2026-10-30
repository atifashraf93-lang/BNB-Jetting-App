BNB Jetting app (Android) - how to get the APK

OPTION A: build in the cloud from your phone or PC (no Android Studio needed)
1. Create a free account on github.com and a new private repository.
2. Upload ALL files and folders of this project (keep the .github folder).
3. Open the Actions tab, choose "Build APK", press "Run workflow".
4. After about 5 minutes open the finished run and download the artifact
   "BNB-Jetting-APK". Unzip it: app-debug.apk is the app.
5. Copy the APK to the phone, open it, and allow "Install unknown apps".

OPTION B: Android Studio
1. Open this folder in Android Studio and let it sync.
2. Build > Build Bundle(s) / APK(s) > Build APK(s).
3. The file is app/build/outputs/apk/debug/app-debug.apk

To change the calculator later: replace app/src/main/assets/index.html and build again.
Saved jobs are kept inside the app on that phone. Fonts load from the internet; offline the app uses system fonts.
