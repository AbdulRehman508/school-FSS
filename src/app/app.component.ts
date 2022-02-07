import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormArray,FormControl,Validators,FormGroup,FormBuilder } from "@angular/forms";
import { from } from 'rxjs';

import { SelectionModel } from '@angular/cdk/collections';
import { masterData, productDetail, userData, userDetail, contactDetail } from './service/service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  p: number = 1;
  title = 'dynamical-template-driven-form';
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration']
  selection = new SelectionModel<Element>(true, []);
  
    // Task is successfully completed 

    customerData:masterData = new masterData();

    // public newItem:Array<productDetail> = new  Array<productDetail>()


  userField:FormGroup
  constructor(private fb:FormBuilder){
    this.userField=this.fb.group({
      nam1 : [''],
    })
  }


  ngOnInit() {
  
   this.customerData.customerProductDetailDto = [];
   this.userData.userDetailDto = [];

    // const userList = JSON.parse((localStorage.getItem('data') || '{}'));
    // const userDetails = new userDetail();
    // userDetails.userID = userList.user_id;
    // userDetails.userName = userList.user_name;
    // userDetails.userContact = userList.user_contact;
    // this.userData.userDetailDto.push(userDetails);

  }
  newList(){
    const detail = new productDetail();
    this.customerData.customerProductDetailDto.push(detail);
  }
  submitCustomerData(){
    console.log(this.customerData);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.customerData.customerProductDetailDto?.length;
    return numSelected === numRows;
  }
  // checkArray:any
  // isCheckedDeleted(){
  //   debugger
  //   this.checkArray = this.customerData.customerProductDetailDto.filter(item => item.isChecked ===  true)
  // }
  deleteItem(){
    debugger
    // this.customerData.customerProductDetailDto = this.customerData.customerProductDetailDto.filter(item => item.isChecked === false);

    this.customerData.customerProductDetailDto.forEach(item => {
      this.customerData.customerProductDetailDto.splice(this.customerData.customerProductDetailDto.findIndex(d => d.isChecked === true),1);
    });
    // this.selection = new SelectionModel<Element>(true, []);
  }
  // Task is successfully completed 



  // Task is successfully completed 

  
  submit:boolean = true;
  update:boolean = false;

  userData:userData = new userData();

  submitUserData(form:any){
        const userDetails = new userDetail();
        userDetails.userID = this.userData.user_id;
        userDetails.userName = this.userData.user_name;
        userDetails.userContact = this.userData.user_contact;
        this.userData.userDetailDto.push(userDetails);
        this.storeValueOnLocalStorage();
        form.reset();
  }
  storeValueOnLocalStorage(){
    localStorage.setItem('data',JSON.stringify(this.userData));
  }

  removeItem1(index:any){
    this.userData.userDetailDto.splice(index,1);
  }
  editIndex = 0;
  updateItem1(index:any){
    this.editIndex = index;
    this.submit = false;
    this.update = true;

    this.userData.user_id = this.userData.userDetailDto[index].userID;
    this.userData.user_name = this.userData.userDetailDto[index].userName;
    this.userData.user_contact = this.userData.userDetailDto[index].userContact;
  }
  updateUserData(form:any){
    this.submit = true;
    this.update = false;
    let userDetails =  this.userData.userDetailDto[this.editIndex];  
    userDetails.userID = this.userData.user_id;
    userDetails.userName = this.userData.user_name;
    userDetails.userContact = this.userData.user_contact;
    form.reset();
  }
  submitUserDataDetail(){
    console.log('user',this.userData);
  }

    // Task is successfully completed 


  contactDetail:any[] = []
  addNewContact(){
    const conDetail = new contactDetail()
    this.contactDetail.push(conDetail);
  }
  removeContact(index:any){
    this.contactDetail.splice(index,1)
  }

}
