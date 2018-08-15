var PlayListWrapper = {
  show:function(id) {
    var ul = document.getElementById('play_list');
    for (var i in PlayLists.lists) {
      var list = document.createElement("li");
      list.classList.add('list_item');
      var check = document.createElement("input");
      check.type = "checkbox";
      check.classList.add("select_check");
      var a = document.createElement("a");
      a.href = "#";
      $(a).attr('music_id', i);
      a.onclick = function() {
        var audio = $('#audio');
        var index = $(this).attr('music_id');
        $('#mp3_src').attr('src', 'music/'+index+'.mp3');
        $('#mp3_src').attr('music_id', index);
        audio[0].pause();
        audio[0].load();
        audio[0].oncanplaythrough = audio[0].play();
        $('#cover_image').attr('src', 'album/'+$(this).attr('music_id')+'.jpg?timestamp='+Math.random());
        $('.player').css('background-image', 'url(album/'+$(this).attr('music_id')+'.jpg)');
        $('#song_title').html(PlayLists.lists[$(this).attr('music_id')].title);
        $('#singer').html(PlayLists.lists[$(this).attr('music_id')].singer);
      }
      a.innerHTML = '<span class="title_ellipsis" sort-field="SONG">'
                  + PlayLists.lists[i].title + '</span><br>';
      a.innerHTML += '<span class="artist_ellipsis" sort-field="ARTIST">'
                  + PlayLists.lists[i].singer + '</span>';
      var btn_listen = document.createElement('a');
      btn_listen.classList.add('btn_listen');
      btn_listen.href = '#';
      $(btn_listen).attr('music_id', i);
      btn_listen.onclick = function() {
        var audio = $('#audio');
        $('#mp3_src').attr('src', 'music/'+$(this).attr('music_id')+'.mp3');
        $('#mp3_src').attr('music_id', $(this).attr('music_id'));
        audio[0].pause();
        audio[0].load();
        audio[0].oncanplaythrough = audio[0].play();
        $('#cover_image').attr('src', 'album/'+$(this).attr('music_id')+'.jpg?timestamp='+Math.random());
        $('.player').css('background-image', 'url(album/'+$(this).attr('music_id')+'.jpg)');
        $('#song_title').html(PlayLists.lists[$(this).attr('music_id')].title);
        $('#singer').html(PlayLists.lists[$(this).attr('music_id')].singer);
      }
      btn_listen.innerHTML = '<img src="play.png" width="30px" heigth="30px">';
      var toggle_btn_box = document.createElement('div');
      toggle_btn_box.classList.add('toggle_btn_box');
      toggle_btn_box.innerHTML = '<a href="#"><i class="material-icons">menu</i></a>';
      list.appendChild(check);
      list.appendChild(a);
      list.appendChild(btn_listen);
      list.appendChild(toggle_btn_box);
      list.classList.add('list_item');
      list.onmouseover = function() {
        this.style.backgroundColor = "rgb(233,240,244)";
        this.children[2].style.opacity = "0.3";
      }
      list.onmouseout = function() {
        $(this).css('backgroundColor', 'white');
        this.children[2].style.opacity = "0";
      }
      $(ul).append(list);
    }
    $(id).append(ul);
  }
}
