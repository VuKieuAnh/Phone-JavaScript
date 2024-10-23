class Phone {
    constructor(battery) {
        this.battery = battery;
        this.draft="";
        this.inbox=[];
        this.sent=[];
        this.status = false;
    }

    send(mobile){
        let draft = this.draft;
    //     chuyen thu nhap cua dt hien tai -> inbox cua dt nhan
        mobile.inbox.push(draft);
    //     chuyen thu nhap cua dt hien tai -> sent cua dt hien tai
        this.sent.push(draft);
    //     xoa thu nhap di
        this.draft="";
    }
    typeMessage(mess){
        this.draft = mess;
    }
}
let qa = new Phone(30);
let ngoc = new Phone(40);
