// jshint devel:true
app.controller('MainCtrl', ['youtubeEmbedUtils', function(youtubeEmbedUtils){
  this.videos = [
    // {title: 'Título one', description: 'Some description one', url: 'sMKoNBRZM1M'},
    {title: 'Título two', description: 'Some description two', url: 'https://www.youtube.com/watch?v=ugxCocs75zE', duration: youtubeEmbedUtils.getTimeFromURL(this.url) },
    {title: 'Título three', description: 'Some description three', url: 'https://www.youtube.com/watch?v=OXiOm_nU7AE', duration: youtubeEmbedUtils.getTimeFromURL(this.url) },
    {title: 'Título four', description: 'Some description fourth', url: 'https://www.youtube.com/watch?v=tbIKNeY_LX4', duration: youtubeEmbedUtils.getTimeFromURL(this.url) },
    {title: 'Título five', description: 'Some description five', url: 'https://www.youtube.com/watch?v=hrCOOF_z6mc', duration: youtubeEmbedUtils.getTimeFromURL(this.url) },
  ];

}]);
