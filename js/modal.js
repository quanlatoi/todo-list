class Modal{
    constructor(){
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'modal');
        this.div.classList.add('hide-modal');
        this.modalContent = document.createElement('div');
        this.modalContent.classList.add('modal-content');
        
        //close button
        this.closeBtn = document.createElement('a');
        this.span = document.createElement('span');
        this.closeBtn.setAttribute('id', 'closeModal');
        this.closeBtn.classList.add('close-btn');
        this.span.classList.add('fas');
        this.span.classList.add('fa-times');
        
        this.cardDetailWindow = document.createElement('div');
        this.cardDetailWindow.classList.add('card-detail-window');
        
        this.div.appendChild(this.modalContent);
        this.modalContent.appendChild(this.closeBtn);
        this.closeBtn.appendChild(this.span);
        this.modalContent.appendChild(this.cardDetailWindow);
        
        window.addEventListener('click', this.hideModal);
    }
}

class _ModalTitle extends Modal{
    constructor(title){
        super(title);
        //Title of modal
        this.boxModal = document.createElement('div');
        this.boxModal.classList.add('box-modal');
        this.windowTitle = document.createElement('div');
        this.windowTitle.classList.add('module-title');
        this.windowTitle.classList.add('window-title');

        this.span = document.createElement('span');
        this.span.classList.add('icon-lg');
        this.span.classList.add('module-title-icon-lg');
        this.span.classList.add('far');
        this.span.classList.add('fa-caret-square-right');

        this.detailItem = document.createElement('h3');
        this.detailItem.classList.add('card-delail-item-header');
        this.detailItem.textContent = title;

        // this.p = document.createElement('p');
        // this.p.classList.add('u-inline-block');
        // this.p.textContent = 'trong danh sách';
        // this.a = document.createElement('a');
        // this.a.classList.add('nameList');
        // this.a.textContent = nameList;

        this.boxModal.appendChild(this.windowTitle);
        this.windowTitle.append(this.detailItem);
        this.windowTitle.append(this.span);
        
        //trường nhập lables
        this.divLables = document.createElement('div');
        this.divLables.classList.add('box-modal');
        this.divLables.classList.add('display-flex');

        this.cardLable = document.createElement('div');
        this.cardLable.classList.add('card-label');
        
        this.cardDetailName = document.createElement('h3');
        this.cardDetailName.classList.add('card-detail-item-header');   
        this.cardDetailName.classList.add('card-detail-name');
        this.cardDetailName.textContent = 'Nhãn';

        this.cardDetailLable = document.createElement('div');
        this.cardDetailLable.classList.add('card-detail-item-label');
        this.cardDetailLable.classList.add('display-flex');

        this.showColor = document.createElement('span');
        this.showColor.classList.add('color-lable');
        this.showColor.innerHTML = '&nbsp';

        this.addColor = document.createElement('a');
        this.addColor.classList.add('color-detail');
        this.addColor.classList.add('icon-add');
        this.addColor.setAttribute('title', 'Thêm nhãn');

        this.iconAddColor = document.createElement('span');
        this.iconAddColor.classList.add('fas');
        this.iconAddColor.classList.add('fa-plus');

        this.divLables.appendChild(this.cardLable);
        this.cardLable.appendChild(this.cardDetailName);
        this.cardLable.appendChild(this.cardDetailLable);
        this.cardDetailLable.appendChild(this.showColor);
        this.cardDetailLable.appendChild(this.addColor);
        this.addColor.appendChild(this.iconAddColor);
        
        //trường nhập date
        this.cardDetailDate = document.createElement('div');
        this.cardDetailDate.classList.add('card-detail-date');

        this.cardDetailDateName = document.createElement('h3');
        this.cardDetailDateName.classList.add('card-detail-item-header');
        this.cardDetailDateName.classList.add('card-detail-name');
        this.cardDetailDateName.textContent = 'Ngày hết hạn';
        
        this.cardDetailDateInput = document.createElement('div');
        this.cardDetailDateInput.classList.add('display-flex-between');
        
        this.inputDate = document.createElement('input');
        this.inputDate.classList.add('dateText');
        this.inputDate.setAttribute('type', 'text');
        this.inputDate.setAttribute('placeholder', 'dd/mm/yyyy');
        this.inputHour = document.createElement('input');
        this.inputHour.classList.add('dateText');
        this.inputHour.setAttribute('type', 'text');
        this.inputHour.setAttribute('placeholder', '00:00');

        this.divLables.appendChild(this.cardDetailDate);
        this.cardDetailDate.appendChild(this.cardDetailDateName);
        this.cardDetailDate.appendChild(this.cardDetailDateInput);
        this.cardDetailDateInput.appendChild(this.inputDate);
        this.cardDetailDateInput.appendChild(this.inputHour);
       
        //trường nhập mô tả
        this.moduleDescription = document.createElement('div');
        this.moduleDescription.classList.add('box-modal');
        
        this.moduleDescriptionTitle = document.createElement('div');
        this.moduleDescriptionTitle.classList.add('display-flex');
        this.moduleDescriptionTitle.classList.add('module-title');

        this.descriptionIcon = document.createElement('span');
        this.descriptionIcon.classList.add('icon-lg');
        this.descriptionIcon.classList.add('module-title-icon-lg');
        this.descriptionIcon.classList.add('fas');
        this.descriptionIcon.classList.add('fa-align-justify');

        this.descriptionTitle = document.createElement('h3');
        this.descriptionTitle.classList.add('card-detail-item-header');
        this.descriptionTitle.textContent = 'Mô tả';

        this.contentBox1 = document.createElement('div');
        this.contentBox1.classList.add('content-box');

        this.inputDecscription = document.createElement('textarea');
        this.inputDecscription.classList.add('textarea');
        this.inputDecscription.setAttribute('placeholder', 'Mô tả chi tiết hơn');


        this.moduleDescription.appendChild(this.moduleDescriptionTitle);
        this.moduleDescription.appendChild(this.contentBox1);
        this.moduleDescriptionTitle.appendChild(this.descriptionIcon);
        this.moduleDescriptionTitle.appendChild(this.descriptionTitle);
        this.contentBox1.appendChild(this.inputDecscription);

        //trường nhập bình luận
        this.moduleCmt = document.createElement('div');
        this.moduleCmt.classList.add('box-modal');

        this.moduleCmtTitle = document.createElement('div');
        this.moduleCmtTitle.classList.add('display-flex');
        this.moduleCmtTitle.classList.add('module-title');

        this.moduleCmtIcon = document.createElement('span');
        this.moduleCmtIcon.classList.add('icon-lg');
        this.moduleCmtIcon.classList.add('module-title-icon-lg');
        this.moduleCmtIcon.classList.add('fas');
        this.moduleCmtIcon.classList.add('fa-comment-medical');

        this.moduleCmtNameTitle = document.createElement('h3');
        this.moduleCmtNameTitle.classList.add('card-detail-item-header');
        this.moduleCmtNameTitle.textContent = 'Bình luận';

        this.contentBox2 = document.createElement('div');
        this.contentBox2.classList.add('content-box');

        this.inputCmt = document.createElement('textarea');
        this.inputCmt.classList.add('textarea');
        this.inputCmt.setAttribute('placeholder', 'Mô tả chi tiết hơn');

        this.moduleCmt.appendChild(this.moduleCmtTitle);
        this.moduleCmt.appendChild(this.contentBox2);
        this.moduleCmtTitle.appendChild(this.moduleCmtIcon);
        this.moduleCmtTitle.appendChild(this.moduleCmtNameTitle);
        this.contentBox2.appendChild(this.inputCmt);

        //thêm thẻ vào modal
        this.cardDetailWindow.appendChild(this.boxModal);
        this.cardDetailWindow.appendChild(this.divLables);
        this.cardDetailWindow.appendChild(this.divLables);
        this.cardDetailWindow.appendChild(this.moduleDescription);
        this.cardDetailWindow.appendChild(this.moduleCmt);
        
        this.iconAddColor.addEventListener('click', this.addNewLabel);
    }

    hideModal(e){
        var modal = document.querySelector('.modal-content');
        var showColor = document.querySelector('.pop-over');
        
        if(e.target.classList[0] == 'modal'){
            try {
                showColor.firstChild.remove();
            } catch (error) {
                console.log(error);
            }
            while(modal.firstChild){
                modal.firstChild.remove();
            }
            document.querySelector('.modal').classList.add('hide-modal');
            return;
        }
        else if(e.target.parentElement.id == 'closeModal'){
            try {
                showColor.firstChild.remove();
            } catch (error) {
            }
            while(modal.firstChild){
                modal.firstChild.remove();
            }
            document.querySelector('.modal').classList.add('hide-modal');
        } 
    }

    addNewLabel(e){
        const a = new _popOverSelect();
        const showColor = document.querySelector('.pop-over');
        
        var labelSelected = 'card-lable-orange';
        if(e.target == this){
            showColor.appendChild(a.popOverChild);
            return;
        }
    }
}