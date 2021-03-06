import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basiclightbox.min.css';

export default function setLightbox(event) {
  const bigImgUrl = event.target.dataset.lightboxImg;
  const instance = basicLightbox
    .create(`<div class="lightbox-wrapper" style="background-image: url('https://i.imgur.com/NI2NcSe.gif')"><img src="${bigImgUrl}" width="800" height="600"></div>`);

  instance.show();
}