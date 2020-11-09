import axios from "axios";
import jwtDecode from 'jwt-decode';

var API_URL;
if(location.hostname === 'localhost') {
  console.log("====Inside If");
  API_URL = 'http://localhost:3000/schedule/';
}
else {
  console.log("====Inside else");
  API_URL = "https://api.vatchit.in/schedule/";
}


class ScheduleService {

    getUserID(){
      if(localStorage.getItem("token")==null)
      {
        window.location.href="/Login";
      }else{
        const jwtPayload = jwtDecode(localStorage.getItem("token"));
        return jwtPayload.context.user;
      }
    }

    schedule(state) {
       // console.log(state);
            var user = this.getUserID();
            var user_id = user.id;
            var meeting_title = state.TopicName;
            var meeting_dateandtime = state.DateAndTime;
            var meeting_pass = state.password;
            return axios
                .post(API_URL + "create", {
                  user_id,
                  meeting_title,
                  meeting_dateandtime,
                  meeting_pass
                })
                .then(response => {
                  //console.log("Schedule ==="+JSON.stringify(response.data));
                  if (response.data.schedule_id) {
                    this.getUsersSchedule();
                  }
                  response.data.name = user.name;
                  return response;
                });
      }

      getUsersSchedule()
      {
        var user = this.getUserID();
        var user_id = user.id;
        var user_name = user.name;
        return axios
                .post(API_URL + "getByUserId", {
                  user_id
                })
                .then(response => {
                  if (response.data.success) {
                    var Schedules = response.data.data;
                    Schedules.forEach(function (Item) {
                      Item.name = user_name;
                    });
                    localStorage.setItem("Schedules", JSON.stringify(Schedules));
                  }
                  return response;
                });
      }
}

export default new ScheduleService();