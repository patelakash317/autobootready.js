// Copyright 2020 Akash Patel (@patelakash317)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

$('button').addClass('btn btn-primary');
$('label').addClass('control-label');
$('input[type="text"]').addClass('form-control');
$('input[type="checkbox"]').addClass('form-check-input');
$('input[type="radio"]').addClass('form-check-input');
$('select').addClass('form-control');
$('textarea').addClass('form-control');

// processing radio button
	$('input[type="radio"]').each(function(index) {
		// starts
			// console.log(index+": "+$(this).text());
			// var getNextNodesIn = function(el){
			// 	return $(el).find(":not(iframe)").addBack().contents().filter(function(){
			// 		return this.nodeType==3;
			// 	});
			// }
			// console.log(getNextNodesIn(this));
			// console.log($(this).contents().nextSibling);
			// prevObject
			// nextSibling
			// nextElementSibling
			// classList
		// ends

		// console.log($(this)[0].nextSibling.nodeValue); // contains and processing next imediate text with/without element
		let x = $(this)[0].nextSibling.nodeValue; // contains and processing next imediate text with/without element
		if(x != null){
			// contains and processing next imediate text with/without element
				$(this)[0].nextSibling.nodeValue='';
				let nx = $(this).wrap('<div class="form-check"><label class="form-check-label"></label></div>');
				nx[0].parentNode.append(x);
				// console.log(nx[0].parentNode);
			// contains and processing next imediate text with/without element ends
		} else {
			// contains next element values
				// console.log($(this).next().text());
				let y = $(this).next().text();
				// console.log(y);
				if(y != ''){
					let nny = $(this).next().detach();
					// console.log(nny);
					let ny = $(this).wrap('<div class="form-check"><label class="form-check-label"></label></div>');
					ny[0].parentNode.append(nny[0]);

					// console.log(ny[0].parentNode);
					// $(this).next().insertAfter(ny[0].parentNode);
					// $(this).next().after(ny[0].parentNode);
					// $(this).next().appendTo(ny[0].parentNode);
					// console.log($(this).next());

					// ny[0].parentNode.append($(this).next()[0]);

					// ny[0].childNode.wrap('<div class="radio"><label></label></div>');
					// console.log(ny);
					// $(this).next()
					// nx[0].parentNode.append(x);
				}
		 	// contains next element values ends

		}
	});
// processing radio button ends

// processing checkbox button
	$('input[type="checkbox"]').each(function(index) {
		// starts
			// console.log(index+": "+$(this).text());
			// var getNextNodesIn = function(el){
			// 	return $(el).find(":not(iframe)").addBack().contents().filter(function(){
			// 		return this.nodeType==3;
			// 	});
			// }
			// console.log(getNextNodesIn(this));
			// console.log($(this).contents().nextSibling);
			// prevObject
			// nextSibling
			// nextElementSibling
			// classList
		// ends

		// console.log($(this)[0].nextSibling.nodeValue); // contains and processing next imediate text with/without element
		let x = $(this)[0].nextSibling.nodeValue; // contains and processing next imediate text with/without element
		if(x != null){
			// contains and processing next imediate text with/without element
				$(this)[0].nextSibling.nodeValue='';
				let nx = $(this).wrap('<div class="checkbox form-check"><label class="form-check-label"></label></div>');
				nx[0].parentNode.append(x);
				// console.log(nx[0].parentNode);
			// contains and processing next imediate text with/without element ends
		} else {
			// contains next element values
				// console.log($(this).next().text());
				let y = $(this).next().text();
				// console.log(y);
				if(y != ''){
					let nny = $(this).next().detach();
					// console.log(nny);
					let ny = $(this).wrap('<div class="checkbox form-check"><label class="form-check-label"></label></div>');
					ny[0].parentNode.append(nny[0]);

					// console.log(ny[0].parentNode);
					// $(this).next().insertAfter(ny[0].parentNode);
					// $(this).next().after(ny[0].parentNode);
					// $(this).next().appendTo(ny[0].parentNode);
					// console.log($(this).next());

					// ny[0].parentNode.append($(this).next()[0]);

					// ny[0].childNode.wrap('<div class="checkbox"><label></label></div>');
					// console.log(ny);
					// $(this).next()
					// nx[0].parentNode.append(x);
				}
		 	// contains next element values ends

		}
	});
// processing checkbox button ends