
/***********stickey********** */

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });
/************************************ */

/***************Drop down*****************/
$(function () {
  $(".select-box .info.edit").click(function () {
  $('.select-box .info').not(this).removeClass('open');
    $(this).toggleClass("open");
    
  }); 
});

/*******************************************/
$( document ).ready(function() {
  // tabbed content
  $(".tab_content").hide();
  $(".tab_content:first").show();
  
  /* if in tab mode */
  $("ul.sub-header-tabs li").click(function() {
  
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.sub-header-tabs li").removeClass("active");
    $(this).addClass("active");

  });
});

/*************************************** */
$(document).ready(function() {
  $(".slider").click(function () {
    $(".export").toggleClass("active");
   
  });
});

/********************************/

$(document).ready(function() {
  // jQuery hover method
  $('.login-signup').click(
      function() {
          // On mouse enter
          $(this).toggleClass('show');
          $('.dropdown-box').toggleClass('show');
          event.preventDefault()
      },
      function() {
          // On mouse leave
          $(this).toggleClass('show');
          $('.dropdown-box').toggleClass('show');
          event.preventDefault()
      }
  
  );
 });



/************************************ */


$( document ).ready(function() {
  // tabbed content
  $(".date_tab_content").hide();
  $(".date_tab_content:first").show();
  
  /* if in tab mode */
  $("ul.date-tabs li").click(function() {
  
    $(".date_tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.date-tabs li").removeClass("active");
    $(this).addClass("active");
  });
  
  });

  
  $( document ).ready(function() {
    // tabbed content
    $(".date_tab_content2").hide();
    $(".date_tab_content2:first").show();
    
    /* if in tab mode */
    $("ul.date-tabs2 li").click(function() {
    
      $(".date_tab_content2").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
    
      $("ul.date-tabs2 li").removeClass("active");
      $(this).addClass("active");
    });
    
    });



    $( document ).ready(function() {
      // tabbed content
      $(".date_tab_content3").hide();
      $(".date_tab_content3:first").show();
      
      /* if in tab mode */
      $("ul.date-tabs3 li").click(function() {
      
        $(".date_tab_content3").hide();
        var activeTab = $(this).attr("rel"); 
        $("#"+activeTab).fadeIn();		
      
        $("ul.date-tabs3 li").removeClass("active");
        $(this).addClass("active");
      });
      
      });


  /*************************Date-tabber-end***************************/

// 1. Select the container div
const container = document.getElementById('threejs-container');

// 2. Create a scene
const scene = new THREE.Scene();

// 3. Create a camera
const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0xffffff);  // Set the scene background
container.appendChild(renderer.domElement);

// Add lights with increased brightness
const light = new THREE.AmbientLight(0x808080); // Increase ambient light intensity
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Increase directional light intensity
scene.add(directionalLight);

// Create the globe (Sphere geometry with a texture)
const textureLoader = new THREE.TextureLoader();
const globeTexture = textureLoader.load('https://media.istockphoto.com/id/1190833993/photo/ai-and-data-concept.webp?s=2048x2048&w=is&k=20&c=sKQwFpkazaZosObi4ycYWSf9GxnOFWPZgD3scjC88vs=');
const geometry = new THREE.SphereGeometry(5, 64, 64);
const material = new THREE.MeshStandardMaterial({ map: globeTexture,
  
   metalness: 0 // Higher metalness for increased reflectivity

});

const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Position the camera
camera.position.z = 10;

// Animate the scene
function animate() {
   requestAnimationFrame(animate);
   globe.rotation.y += 0.008; // Rotate the globe
   renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener('resize', () => {
   // Update container dimensions
   const width = container.clientWidth;
   const height = container.clientHeight;

   // Update camera aspect ratio and projection matrix
   camera.aspect = width / height;
   camera.updateProjectionMatrix();

   // Update renderer size
   renderer.setSize(width, height);
});


