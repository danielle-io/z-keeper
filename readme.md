<h1>z-keeper :crescent_moon:</h1>

<h2>About</h2>
Z-keeper is a quick application I created to learn the Ionic SDK. This cross-platform mobile app allows users to track their sleep and how they're feeling throughout the day, and this data is stored and retrieved using Ionic Storage. Both types of entries are displayed chronologically in the user's logs tab, accompanied by the option to delete any individual log. Hours slept are logged when the tracker is started on the 'Track Sleep' tab, and later stopped upon awakening. The start and stop buttons are automatically disabled and enabled based on the last input. The tiredness level can be submitted using either the slider view or the list view, which have been synced so that toggling between them after a selection will maintain that selection across both views. The slider view is meant for quick entry once users are familiar with the scale, while the list view allows users to read through the options and familiarize themselves as needed.

<h2>To Run:</h2>
If Ionic is not installed on your machine run:

<pre><code>npm install -g ionic</pre></code>

If Angular is not installed on your machine run:

<pre><code>npm install -g @angular/cli</pre></code>

To run mobile simulators for iPhone and Android in a browser run:

<pre><code>ionic lab</pre></code>

<h2>App Images</h2>
<h3>Home Page</h3>
<img src="/src/assets/images/app-images/homePage.png">

<h4>Using slider to submit tiredness rating</h4>
<img src="/src/assets/images/app-images/homePageMoveSlider.png">

<h4>Using list view to submit tiresness rating</h4>
<img src="/src/assets/images/app-images/homePageListView.png">

<img src="/src/assets/images/app-images/homePage.png">

<h3>Sleep Tracker Page</h3>
<img src="/src/assets/images/app-images/sleepTracker.png">

<h3>Sleep Logs Page</h3>
<img src="/src/assets/images/app-images/tiredLogs.png">

<h4>Confirming deletion of a log after clicking the remove icon alongside it</h4>
<img src="/src/assets/images/app-images/sleepLogsDeletion.png">