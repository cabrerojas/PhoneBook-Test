import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeHtmlString'
})
export class DecodeHtmlStringPipe implements PipeTransform {

  transform(value: string) {
    
    // public method for url decoding

		var string = "";
		var i = 0;
    var c1,c2,c3;
		var c = c1 = c2 = 0;
 
		while ( i < value.length ) {
 
			c = value.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = value.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = value.charCodeAt(i+1);
				c3 = value.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;

    

   



  }

}
