/*Слайдер на главной*/
if(document.querySelector(".main-slider")) {
  var slides_node = document.querySelector(".main-slider").querySelectorAll(".slide");
  var slides_arr = [slides_node.length];
  var prev = document.querySelector(".main-slider").querySelector(".slider-nav.prev");
  var next = document.querySelector(".main-slider").querySelector(".slider-nav.next");
  
  for (var i = 0; i < slides_node.length; i++) {
    slides_arr[i] = slides_node.item(i);
  }
  
  for (var i = 0; i < slides_arr.length; i++) {
    slides_arr[i].classList.remove("show")
  }
  
  slides_arr[0].classList.add("show")
  
  prev.addEventListener("click", function(event) {
    var last;
    for(var i = 0; i < slides_node.length; i++) {
      if(slides_arr[i].classList.contains("show")) {
        last = i;
      }
    } 
    i = last;
    if((i-1) < 0) {
    } else {
      slides_arr[i].classList.remove("show")
      slides_arr[i-1].classList.add("show")
    }
  });

  next.addEventListener("click", function(event) {  
    for(var i = 0; i < slides_node.length; i++) {
      if(slides_arr[i].classList.contains("show")) {
        break;
      }
    }        
    if((i+1) >= slides_arr.length) {
    } else {
      slides_arr[i].classList.remove("show");
      slides_arr[i+1].classList.add("show");
    }
  });
}

/* Загрузка фрейма */
window.addEventListener("load", function(event) {
  var iframe =  document.querySelector("iframe");
  if(iframe) {
    iframe.classList.add("show");
  }
})

/* Виджет */
var widget = document.querySelector(".widget");
if(widget) {
  var tabs = widget.querySelectorAll(".widget-tabs div");
  var tabs_arr = [tabs.length];
  var widget_items = widget.querySelectorAll(".widget-item");
  var widget_arr = [widget_items.length];
  
  for(var i = 0; i < tabs.length; i++) {
    tabs_arr[i] = tabs.item(i);
    widget_arr[i] = widget_items.item(i);
  }
  
  tabs_arr.forEach(function(item, i, tabs_arr) {
    tabs_arr[i].addEventListener("click", function() {
      tabs_arr.forEach(function(item, y, tabs_arr) {
        tabs_arr[y].classList.remove("active")
      })
      widget_arr.forEach(function(item, y, widget_arr) {
        widget_arr[y].classList.remove("active")
      })
      tabs_arr[i].classList.add("active");
      widget_arr[i].classList.add("active");
    })
  })
}

/* Мобильный хедер */
var mobile_show = document.querySelector(".mobile-btn");
var mobile_header = document.querySelector(".header-nav");
/*var header_call = document.querySelector("nav .header-call");*/
var nav = document.querySelector("nav");
var overlay = document.querySelector(".overlay");

if(mobile_show) {
  mobile_show.addEventListener("click", function() {
    if(nav.classList.contains("fixed")) {
      mobile_show.classList.remove("active");
      nav.classList.remove("fixed");
      mobile_header.classList.remove("fixed", "slideInDown");
    } else {
      mobile_show.classList.add("active");
      nav.classList.add("fixed");
      mobile_header.classList.add("fixed", "slideInDown");
    }
  })

  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 200) {
      mobile_show.classList.add("fixed");
    } else {
      mobile_show.classList.remove("fixed");
    }
  }
}

/* Форма обратного звонка */
var modal_call = document.querySelector(".modal-call");
var overlay = document.querySelector(".overlay");

if(modal_call) {
  var call_btns_node = document.querySelectorAll(".btn-order-call");
  var call_btn_arr = [call_btns_node.length];
  for(var i = 0; i < call_btns_node.length; i++) {
    call_btn_arr[i] = call_btns_node.item(i);
  }
  call_btn_arr.forEach(function(item, i, call_btn_arr) {
    call_btn_arr[i].addEventListener("click", function(event) {
      event.preventDefault();
      modal_call.classList.add("show");
      overlay.classList.add("show")
      if(nav.classList.contains("fixed")) {
        mobile_show.classList.remove("active");
        nav.classList.remove("fixed");
        mobile_header.classList.remove("fixed", "slideInDown");
      }
      modal_call.querySelector(".close").addEventListener("click", function(event) {
        event.preventDefault();
        modal_call.classList.remove("show");
        overlay.classList.remove("show");
      })
    })
  })
}

/* Слайдер на услуге */
var slider_service = document.querySelector(".service-slider");

if(slider_service) {
  var slides_node = document.querySelectorAll(".slide");
  var slides_arr = [slides_node.length];
  var buttons = [slides_arr.length];
  var btn_prev = document.querySelector(".slider-nav.prev");
  var btn_next = document.querySelector(".slider-nav.next");

  for(var i = 0; i < slides_node.length; i++) {
    slides_arr[i] = slides_node.item(i);
  };
  
  for (var i = 0; i < slides_arr.length; i++) {
    slides_arr[i].classList.remove("show")
  }
  
  slides_arr[0].classList.add("show")
  
  
  btn_prev.addEventListener("click", function(event) {
    for(var i = 0; i < slides_arr.length; i++) {
      if(slides_arr[i].classList.contains("show")) {
        slides_arr[i].classList.remove("show");
        buttons[i].classList.remove("current");
        if(i === 0) {
          slides_arr[slides_arr.length-1].classList.add("show");
          buttons[slides_arr.length-1].classList.add("current");
          break;
        } else {
          slides_arr[i-1].classList.add("show");
          buttons[i-1].classList.add("current");
        }
      }
    }
  });

  btn_next.addEventListener("click", function(event) {
    for(var i = 0; i < slides_arr.length; i++) {
      if(slides_arr[i].classList.contains("show")) {
        slides_arr[i].classList.remove("show");
        buttons[i].classList.remove("current");
        if(i === slides_arr.length - 1) {
          slides_arr[0].classList.add("show");
          buttons[0].classList.add("current");
        } else {
          slides_arr[i+1].classList.add("show");
          buttons[i+1].classList.add("current");
        }
        break;
      }
    }
  });

  function add_buttons() {
    for(var i = 0; i < slides_arr.length; i++) {
      buttons[i] = document.createElement("button");
      buttons[i].className = "btn-slider animated fadeIn";
      if(i === 0) {
        buttons[i].className = "btn-slider current";  
      }
      buttons[i].innerHTML = i+1;
      document.querySelector(".slider-btns").appendChild(buttons[i]);
    }
  };

  add_buttons();      
  
  buttons.forEach(function(item, i, buttons) {
    buttons[i].addEventListener("click", function() {
      buttons.forEach(function(item, y, buttons) {
        if(buttons[y].classList.contains("current")) {
          buttons[y].classList.remove("current");
          slides_arr[y].classList.remove("show");
        }
      })
      buttons[i].classList.add("current");
      slides_arr[i].classList.add("show");
    })
  })
}

/* Увеличение фото на мероприятиях */
if(document.querySelector(".big-img-js")) {
  main_images_node = document.querySelectorAll(".big-img-js");
  main_images = [main_images_node.length];

  if(main_images_node) {
    for(var i = 0; i < main_images_node.length; i++) {
      main_images[i] = main_images_node.item(i);
    }

    main_images.forEach(function(item, i, main_imgaes) {
      main_images[i].addEventListener("click", function(event) {
        event.preventDefault();
        img = document.createElement('img');
        imgHref = main_images[i].getAttribute('href');
        img.setAttribute('src', imgHref);
        img.classList.add("zoom-img");
        overlay.classList.add("show");
        overlay.classList.add("overflow");
        overlay.appendChild(img);
        if(overlay.classList.contains("show")) {
          overlay.addEventListener("click", function() {
            img.remove();
            overlay.classList.remove("show");
            overlay.classList.remove("overflow");
          })
        }
      })
    })
  }
}