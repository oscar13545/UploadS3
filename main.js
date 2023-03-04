// Credenciales
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAQ7QXPYGZVYZY6LNN',
  secretAccessKey: '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'
});

const s3 = new AWS.S3();

//Listener del input
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Obtencion de datos
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const fileName = file.name;
    const fileContent = file;

    //Colocar los parametros 
    const params = {
        Bucket: 'my-site-prueba1',
        Key: fileName,
        Body: fileContent,
        ContentType: file.type,
    };
    
    // Subir a S3
    s3.upload(params, (err, data) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log(`Successfully uploaded ${fileName} to ${data.Location}`);
    }
    });
});
