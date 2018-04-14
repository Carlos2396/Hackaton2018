import { Component, OnInit } from '@angular/core';
import * as Pz from "pizzicato";

@Component({
  selector: 'app-dummy-retrieve',
  templateUrl: './dummy-retrieve.component.html',
  styleUrls: ['./dummy-retrieve.component.css']
})
export class DummyRetrieveComponent implements OnInit {

  message: string;
  successMessage: string;

  constructor() { }

  ngOnInit() {
    this.message = '';
    this.successMessage = '';
  }

  removeMessage(){
    this.successMessage = '';
    this.message = '';
  }

  playMusic(){
    console.log(1);
    var audio1 = new Pz.Sound('../../../../assets/music/Bajo.mp3', function(){
      
              var group = new Pz.Group();
        
              group.addSound(audio1);
              group.play();
            
    });
  }

  playAll(){
    console.log(5);
    var audio1 = new Pz.Sound('../../../../assets/music/Bajo.mp3', function(){
      var audio2 = new Pz.Sound('../../../../../assets/music/Bateria.mp3', function(){
        var audio3 = new Pz.Sound('../../../../../assets/music/Guitarra.mp3', function(){
          var audio4 = new Pz.Sound('../../../../../assets/music/Trompeta.mp3', function(){
            var audio5 = new Pz.Sound('../../../../../assets/music/Violines.mp3', function(){
              var group = new Pz.Group();
        
              group.addSound(audio1);
              group.addSound(audio2);
              group.addSound(audio3);
              group.addSound(audio4);
              group.addSound(audio5);
              group.play();
            });
          });
        });
      });
    });
  }

  

  playMusic2(){
    console.log(2);
    var audio1 = new Pz.Sound('../../../assets/music/Bajo.mp3', function(){
      var audio2 = new Pz.Sound('../../../../../assets/music/Bateria.mp3', function(){
       
              var group = new Pz.Group();
        
              group.addSound(audio1);
              group.addSound(audio2);
              
              group.play();
            
      });
    });
  }

  playMusic3(){
    console.log(3);
    var audio1 = new Pz.Sound('../../../../assets/music/Bajo.mp3', function(){
      var audio2 = new Pz.Sound('../../../../../assets/music/Bateria.mp3', function(){
        var audio3 = new Pz.Sound('../../../../../assets/music/Guitarra.mp3', function(){
         
              var group = new Pz.Group();
        
              group.addSound(audio1);
              group.addSound(audio2);
              group.addSound(audio3);
              group.play();
            
        });
      });
    });
  }

  playMusic4(){
    console.log(4);
    var audio1 = new Pz.Sound('../../../../assets/music/Bajo.mp3', function(){
      var audio2 = new Pz.Sound('../../../../../assets/music/Bateria.mp3', function(){
        var audio3 = new Pz.Sound('../../../../../assets/music/Guitarra.mp3', function(){
          var audio4 = new Pz.Sound('../../../../../assets/music/Trompeta.mp3', function(){
           
              var group = new Pz.Group();
        
              group.addSound(audio1);
              group.addSound(audio2);
              group.addSound(audio3);
              group.addSound(audio4);
              group.play();
            
          });
        });
      });
    });
  }
  
}
