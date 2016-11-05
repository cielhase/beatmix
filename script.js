var likes = 0;
function play_clip(clip_name){
    var audio = document.getElementById("playback_controls");
    audio.controls = true;
    audio.src = clip_name;
    audio.autoplay = true;
    audio.onended = function(){
        //audio.remove() //Remove when played.
    };
}

function submit_contribution(){
    $("#clip_display").prepend("<div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <button type=\"button\" class=\"btn btn-default\" id=\"play_button\" onclick=\"play_clip(\'.\/clips\/guitar_added.wav\')\">\r\n                            <span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"><\/span>\r\n                        <\/button>\r\n                      <\/div>\r\n                      <div class=\"media-body\">\r\n                        <h4 class=\"media-heading\">Backing Drums (Add On)<\/h4>\r\n                        <p>Just added a guitar melody!<\/p>\r\n                      <\/div>\r\n                    <div class=\"media-right\">\r\n                        <button data-toggle=\"collapse\" data-target=\"#contribute_settings\" class=\"btn btn-default\">Contribute<\/button>\r\n                   <button type=\"button\" class=\"btn btn-default\" id=\"like_button\" onclick=\"process_like()\">\r\n                            <span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\"><\/span>\r\n                        <\/button>\r\n                        <label id=\"likes\"> 0 <\/label>\n <\/div>\r\n                    \r\n                    <div class=\"collapse\" id=\"contribute_settings\">\r\n                        <div class=\"form-group\">\r\n                            \r\n                            <div class=\"row\">\r\n                                <input id=\"input-1\" type=\"file\" class=\"file\">\r\n                            <\/div>\r\n                            \r\n                            <label for=\"Description\">Description: <\/label>\r\n                            <textarea class=\"form-control\" rows=\"3\" id=\"description_box\"><\/textarea>\r\n                            <button class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#contribute_settings\" onclick=\"submit_contribution()\">Submit<\/button>\r\n                        <\/div>\r\n                    <\/div>\r\n                <\/div>");
    
    alert("Successfully Added.");
}

function submit_contribution2(){
    $("#clip_display").prepend("<div class=\"media\">\r\n                      <div class=\"media-left\">\r\n                        <button type=\"button\" class=\"btn btn-default\" id=\"play_button\" onclick=\"play_clip(\'.\/clips\/guitar_added.wav\')\">\r\n                            <span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"><\/span>\r\n                        <\/button>\r\n                      <\/div>\r\n                      <div class=\"media-body\">\r\n                        <h4 class=\"media-heading\">Backing Drums (Add On)<\/h4>\r\n                        <p>Just added a guitar melody!<\/p>\r\n                      <\/div>\r\n                    <div class=\"media-right\">\r\n                        <button data-toggle=\"collapse\" data-target=\"#contribute_settings3\" class=\"btn btn-default\">Contribute<\/button>\r\n <button type=\"button\" class=\"btn btn-default\" id=\"like_button\" onclick=\"process_like()\">\r\n                            <span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\"><\/span>\r\n                        <\/button>\r\n                        <label id=\"likes\"> 0 <\/label> \n                   <\/div>\r\n                    \r\n                    <div class=\"collapse\" id=\"contribute_settings3\">\r\n                        <div class=\"form-group\">\r\n                            \r\n                            <div class=\"row\">\r\n                                <input id=\"input-1\" type=\"file\" class=\"file\">\r\n                            <\/div>\r\n                            \r\n                            <label for=\"Description\">Description: <\/label>\r\n                            <textarea class=\"form-control\" rows=\"3\" id=\"description_box\"><\/textarea>\r\n                            <button class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#contribute_settings3\" onclick=\"submit_contribution2()\">Submit<\/button>\r\n                        <\/div>\r\n                    <\/div>\r\n                <\/div>");
    
    $("#clip_display").prepend("<div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;<\/span><\/button>\r\n Successfully Added.\r\n<\/div>");
}

function process_like(){
    likes ++;
    document.getElementById("likes").innerHTML = likes;
}

function see_comments(){
    
}