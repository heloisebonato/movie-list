## Movie List
<p align="left"><img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/></p>

# Introduction
<p> Movie List is a project that lists popular movies consumed from a movie API (https://developers.themoviedb.org/3/movies) </p>

# 📁 Installation
<p> To run the Movie List project in your local development environment is very easy. Make sure you have Git and Node.js installed and follow the instructions below.</p>
<ol>
<li> Clone the source code </li>
<code>git clone https://github.com/heloisebonato/movie-list.git</code>
<li> Install development dependencies </li>
<code>npm install</code>
<li> Run a local development server </li>
 <code>npm start </code>
 </ol>
 <p> The project is running and accessible from a web browser at http://localhost:3000/ </p>

# API Key
<p>To consume the API, you need to create an account at https://www.themoviedb.org/ and after that go to Settings > API and copy the API key</p>
<p>In the project, inside the <bold>src</bold> folder, I created a folder called "config" and inside I created a file "key.js" and I put: </p>
<code>export const APIKey="putYourApiKeyHere" </code>
<p>In "Home.jsx" I imported the api key and called it inside the url in the fetch method </p>
<p> ***Don't forget to put this file with the api key on <bold>.gitignore</bold>, to make sure nobody sees this key***</p>
<br>
<p>You can do it like i did, or create a .env file and put the api key there</p>

 # Technologies Used
 <ul>
 <li> <code> React.js </code> </li>
 <li> <code> Styled Components </code> </li>
 <li> <code> Git </code> </li>
 <li> <code> React Router Dom </code> </li>
<li> <code> Visual Studio Code </code> </li>
 </ul>