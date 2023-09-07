import { Component } from '@angular/core';

@Component({
  selector: 'app-tea-cards',
  templateUrl: './tea-cards.component.html',
  styleUrls: ['./tea-cards.component.scss']
})
export class TeaCardsComponent {
  data:any = [
    {
      "image" : "../../../assets/images/Group 921.png",
      "title" : "Green Tea",
      "description" : "Each of our tea sachets hold generous portions of full leaf tea. Drink a cup of ultra-premium tea with convenience on the go!"
    },
    {
      "image" : "../../../assets/images/Group 922.png",
      "title" : "Matcha Tea",
      "description" : "Enjoy our matcha by sipping the natural boost of antioxidants. We offer a variety of options from hot, cold, whipped or classic."
    },
    {
      "image" : "../../../assets/images/Group 923.png",
      "title" : "Bubble Tea ",
      "description" : "Bubble tea, also known as boba tea, is a tea-based drink flavored with milk or fruit. Our come in variety of vanilla, chocolate and diffrent fruit flavors."
    }
  ]
}
