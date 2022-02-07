
export class masterData implements masterData{
    cus_id: number ;
    cus_name: string ;
    cus_contact: string ;
    date: string ;
    cus_address: string ;
    customerProductDetailDto: productDetail[];
}
export class productDetail implements productDetail{
    isChecked: boolean = false;
    productId: number ;
    product: string;
    description: string;
    quantity: number;
    u_price: number;
    taxes: number;
    s_total: number ;
}
export class userData implements userData{
    user_id: number ;
    user_name: string ;
    user_contact: string ;
    userDetailDto: userDetail[];
    userDetailDtos: userDetails[];
}
export class userDetail implements userDetail{
    userID: number ;
    userName: string;
    userContact: string;
}
export class userDetails implements userDetails{
    userIDs: number ;
    userNames: string;
    userContacts: string;
}

export class contactDetail implements contactDetail{
    userID: number ;
    userName: string;
    userContact: string;
}