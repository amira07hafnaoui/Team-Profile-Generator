
module.exports = function generateHTML(managerArr, engineerArr, interArr) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cyborg/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Team Site</title>
    <style>
         @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           color:black;

           }
    
           body {
            background-color:#b3d1ff;
            font-family: Georgia, 'Times New Roman', Times, serif;
           }
          
        </style>
</head>

<body>
    <div class="container" >
        <div class=" jumbotron " style="background-color:red;">
            <h1 class="text-center" style="color:black;">MY TEAM </h1>
        </div>
        <h3 style="color:black;">Management</h3>
        <div class="row justify-content-center mb-5">
        
        <!-- Manager Card -->
        ${managerArr.map(manager =>
        `<div class="card col-3" style="background-color: antiquewhite;">
            <div class="card-header" style="background-color:#0066ff;">
            <h3><strong> ${manager.name}</strong></h3>
            <h3><strong> <i class="fa fa-coffee"></i> Manager</strong></h3>
            </div>
            <div class="card-body">
            <div>
            <h5><strong>Employee ID: </strong> <span>${manager.id}  </span></h5>
            <h5><strong>Email: </strong> <span>${manager.email} </span></h5>
            <h5><strong>Office Number: </strong> <span> ${manager.officeNumber} </span></h5>
            </div>
            </div>
            </div>`.trim()).join("")}
            <!-- End Manager Card -->
        </div>
            
            <h3 style="color:black;">Engineering</h3>
            <div class="row justify-content-center mb-5">    
            <!-- Engineer Cards -->
            ${engineerArr.map(engineer =>
            `<div class="card col-3 m-1" style="background-color: antiquewhite;">
                <div class="card-header" style="background-color:#0066ff;">
                <h3><strong> ${engineer.name} </strong></h3>
                <h3><strong> <i class="fa fa-user"></i> Engineer</strong></h3>
                </div>
                <div class="card-body">
                <div>
                <h5><strong>Employee ID: </strong> <span> ${engineer.id} </span></h5>
                <h5><strong>Email: </strong> <span> ${engineer.email} </span></h5>
                <h5><strong>GitHub username: </strong> <span> ${engineer.github} </span></h5>
                </div>
                </div>
                </div>`.trim()).join("")}    
                <!-- End Engineer Cards -->
            </div> <!-- end row -->
                
        <h3 style="color:black;" >Interns</h3>
       <div class="row justify-content-center mb-5">
            <!-- Intern Cards -->
            ${interArr.map(intern =>
                `<div class="card col-3 m-1" style="background-color: antiquewhite;">
                <div class="card-header" style="background-color:#0066ff;">
                    <h3><strong> ${intern.name} </strong></h3>
                    <h3><strong> <i class="fa fa-graduation-cap"></i> Intern</strong></h3>
                </div>
                <div class="card-body">
                    <div>
                        <h5><strong>Employee ID:</strong> <span> ${intern.id} </span></h5>
                        <h5><strong>Email:</strong> <span> ${intern.email} </span></h5>
                        <h5><strong>School:</strong> <span> ${intern.school} </span></h5>
                    </div>
                </div>
            </div>`.trim()).join("")}

            <!-- End Intern Cards -->

        </div> <!-- end row -->    
    </div> <!-- end Container -->

</body>

</html>`
}