

class BaseURL {
    static BaseUrl ='http://127.0.0.1:8000/api'

    static VisitorDetails = this.BaseUrl+'/getvisitordetails'
    static PostContact = this.BaseURL+"/postcontact"
}

export default BaseURL