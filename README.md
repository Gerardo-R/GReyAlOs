# GReyAlOs

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="img/greyalos-low-resolution-logo-white-on-transparent-background.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GReyAlOs-README</h3>

  <p align="center">
    README de Sitio web de empresa ficticia "GReyAlOs" para la materia de Tecnologías Emergentes
    <br />
    <a href="https://github.com/Gerardo-R/GReyAlOs"><strong>Explorar los documentos »</strong></a>
    <br />
    <br />
    <a href="https://gerardo-r.github.io/GReyAlOs/">Ver Demo del Sitio Web</a>
    ·
    <a href="https://github.com/Gerardo-R/GReyAlOs/issues">Reportar Error</a>
    ·
    <a href="https://github.com/Gerardo-R/GReyAlOs/issues">Solicitar cambio</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#construído-con">Construído con</a></li>
      </ul>
    </li>
    <li>
      <a href="#primeros-pasos">Primeros pasos</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#créditos">Créditos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Acerca del proyecto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Proyecto de sitio web para una empresa de desarrollo de software a la medida, que implementa un formulario de correo con reCAPTCHA y que se envía gracias a Formspree.
Trabajo para la materia Tecnologías Emergentes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Construído con

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
*   ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)
*   ![css](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
*   ![html5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
*   <img src="https://leafletjs.com/docs/images/logo.png" alt="Leaflet" width="100">
*   <img src="https://www.openstreetmap.org/assets/osm_logo-4afddaae0230a5a46687fdc751ed256dfdccde144118cb02a7d7960f207a4b92.svg" alt="OpenStreetMap" height="50">
*   <img src="https://repository-images.githubusercontent.com/24650294/4d804b80-7e39-11e9-82fe-07761d844a8c" alt="ReCAPTCHA-v3" height="50">
*   <img src="https://formspree.io/img/formspree-new.svg/" alt="Formspree" height="50">


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Primeros pasos

### Prerrequisitos

1. Tener instalado Visual Studio Code o cualquier otro software que permita abrir el proyecto y editar el código.
2. Crear una cuenta en [Formspree](https://formspree.io/) y crear un nuevo proyecto.
3. En el proyecto de Formspree, configurar la cuenta de correo a la que se enviarán los formularios.
4. Entrar a [Font Awesome](https://fontawesome.com/start), ingresar nuestro email para registrarse en el sitio y recibir un código de kit de iconos gratuito.


### Instalación

A continuación se describen los pasos para la correcta instalación del proyecto.

1. Clonar o [descargar](https://github.com/Gerardo-R/GReyAlOs/archive/refs/heads/main.zip) el repositorio.

```sh
  git clone Gerardo-R/GReyAlOs
```

2. En el archivo "contacto.html":
   - Reemplazar el código de kit obtenido de Font Awesome:  
   ```html
      <script src="https://kit.fontawesome.com/codigo.js" crossorigin="anonymous"></script>
   ```  
   - Reemplazar el código de formulario de Formspree con el obtenido al crear un proyecto en Formspree:  
   ```html
    <form id="contact-form" action="https://formspree.io/f/codigo" method="post">
   ```
  
 3. Entrar a [reCAPTCHA admin](https://www.google.com/recaptcha/admin/create) y rellenar el formulario para obtener credenciales para reCAPTCHA v3. En el formulario hay que agregar el dominio que tendrá el sitio web publicado para que funcione reCAPTCHA.
 
4. En el archivo "contacto.html":
   - Reemplazar la clave del sitio con la obtenida a través de reCAPTCHA:  
  ```html
    <script src="https://www.google.com/recaptcha/api.js?render=clave-de-sitio"></script>
    ...
    <button class="g-recaptcha" data-sitekey="clave-de-sitio" data-callback='onSubmit' data-action='submit'>Enviar</button>
  ```
  
 5. Publicar el sitio web.
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## Licencia

Distribuido bajo la licencia MIT. Consultar `LICENSE` para más información.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contacto

Gerardo Reyna - gerardoreyna968@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gerardo-reyna-199964193/)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=flat-square&logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UC4uYKo9XeQSIg8iU2KhtQFQ)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=flat-square&logo=Instagram&logoColor=white)](https://www.instagram.com/zillamxxn/)

Link del proyecto: [https://github.com/Gerardo-R/GReyAlOs](https://github.com/Gerardo-R/GReyAlOs)
<br>
Perfil de GitHub: [Gerardo-R](https://github.com/Gerardo-R/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Créditos

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Gerardo-R/GReyAlOs.svg?style=for-the-badge
[contributors-url]: https://github.com/Gerardo-R/GReyAlOs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Gerardo-R/GReyAlOs.svg?style=for-the-badge
[forks-url]: https://github.com/Gerardo-R/GReyAlOs/network/members
[stars-shield]: https://img.shields.io/github/stars/Gerardo-R/GReyAlOs.svg?style=for-the-badge
[stars-url]: https://github.com/Gerardo-R/GReyAlOs/stargazers
[issues-shield]: https://img.shields.io/github/issues/Gerardo-R/GReyAlOs.svg?style=for-the-badge
[issues-url]: https://github.com/Gerardo-R/GReyAlOs/issues
[license-shield]: https://img.shields.io/github/license/Gerardo-R/GReyAlOs.svg?style=for-the-badge
[license-url]: https://github.com/Gerardo-R/GReyAlOs/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gerardo-reyna-199964193/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
