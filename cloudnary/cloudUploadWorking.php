<html>
  <body>
    <h1>Upload to Cloudinary with FormData</h1>
    <form action="" method="post" enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          <label >Select your photo:
          <input type="file" name="file"></label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
        <img id="uploaded">
        <div id="results"></div>
      </fieldset>
    </form>
   
    <?php
      $cloud_name = "joshbump";
      $api_key = "432615562473847";
      $api_secret = "LPjWFvOLfMG98m2Ax9HVuo9vFy8";
      $timestamp = time();
      $signature = sha1("timestamp=".$timestamp.$api_secret);
    ?>

    <script>
        // window.ajaxSuccess = function () {
        //   response = JSON.parse(this.responseText);
        //   console.log("ajaxSuccess", typeof this.responseText);
        //   document.getElementById('uploaded').setAttribute("src", response["secure_url"]);
        //   document.getElementById('results').innerText = this.responseText;
        // }
        
        window.AJAXSubmit = function (formElement) {
          console.log("starting AJAXSubmit");
          //alert(formElement);
          var xhr = new XMLHttpRequest();
          //xhr.onload = ajaxSuccess;
          var formData = new FormData(formElement);
          formData.append("timestamp", "<?php echo $timestamp ?>");
          formData.append("signature", "<?php echo $signature ?>");
          formData.append("api_key", "<?php echo $api_key ?>");
          console.log(formData);
          xhr.open("post", "https://api.cloudinary.com/v1_1/<?php echo $cloud_name ?>/image/upload");
          xhr.send(formData);
        }
    </script>
  </body>
</html>


<div class="buy-now">
              <div class="popup-header">
                     <div id="progress" class="progress1">
                        <progress id="showProgress" value="0"></progress>
                    </div>
                    <p id="percentage-loader_1">0 %</p>
            </div>
             <span id="upload_image_button" class="btn btn-success fileinput-button">
                <i class="glyphicon glyphicon-plus"></i>
                  <span>Select image</span>
                  <input id="fileupload" onchange="AJAXSubmit(this); return false;" type="file" name="files[]" multiple="">
              </span>
            </div>

            ===================


 <script>
             $(function () {

    window.AJAXSubmit = function (formElement) {

          console.log("starting AJAXSubmit");
          var xhr = new XMLHttpRequest();
          var formData = new FormData();
          var file = $('input[type=file]')[0].files[0];
          
          var progressBar = document.getElementById("showProgress");
          
          var display = document.getElementById("percentage-loader_1");
          
          formData.append('file', file);
          formData.append("timestamp", "<?php echo $timestamp ?>");
          formData.append("signature", "<?php echo $signature ?>");
          formData.append("api_key", "<?php echo $api_key ?>");
          console.log(formData);
          xhr.open("post", "https://api.cloudinary.com/v1_1/<?php echo $cloud_name ?>/image/upload");

          xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
              progressBar.max = e.total;
              progressBar.value = e.loaded;
              display.innerText = Math.floor((e.loaded / e.total) * 100) + '%';
            }
          }
          xhr.upload.onloadstart = function(e) {
            progressBar.value = 0;
            display.innerText = '0%';
          }
          xhr.upload.onloadend = function(e) {
            progressBar.value = e.loaded;
            $('#progress .progress-bar').css('width','0%');
          }

          xhr.send(formData);

          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4)
            {         //statusDisplay.innerHTML = '';
                  if(xhr.status == 200) {          
                      var d= (xhr.responseText);
                      obj = JSON.parse(d);
                      // alert(obj['secure_url']);
                      var imgObj = new Image();
                      imgObj.crossOrigin = "Anonymous";

                      imgObj.src = obj['secure_url'];

                      imgObj.onload = function () {

                              var image_width = width/3;
                              var image_height = (image_width * imgObj.height)/imgObj.width;
                              var image = new fabric.Image(imgObj);
                              image.set({
                                padding: 5,
                                cornersize: 5,
                                left: width*(.5),
                                top: height*(.4),
                                angle: 00,
                                width: image_width,
                                height: image_height
                              });
                              canvas.add(image);
                      }
                      canvas.renderAll();
                      $('#image_upload_div').hide();
                      $('html,body').css({'overflow':'','height':'100%'});
                      $('#showProgress').val('0');
                       document.getElementById("percentage-loader_1").innerHTML = '0%';
                  }
            }
          }
  }
});

 </script>
   