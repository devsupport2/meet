import axios from "axios";
import jwtDecode from 'jwt-decode';

const API_URL = "http://localhost:3000/schedule/";

class ScheduleService {

    getUserID(){
      const jwtPayload = jwtDecode(localStorage.getItem("token"));
      return jwtPayload.context.user.id;
    }

    schedule(state) {
        console.log(state);
            //localStorage.removeItem("Schedules");
            //console.log("json from lS"+JSON.stringify(localStorage.getItem("Schedules")));
            //console.log("json from recent list"+JSON.stringify(localStorage.getItem("features/recent-list")));
            //  var local = localStorage;
            // for (var key in local) {
            //   console.log(key);
            // }
            var user_id = this.getUserID();
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
                  if (response.data.schedule_id) {
                    this.getUsersSchedule();
                  }
                  return response;
                });
      }

      getUsersSchedule()
      {
        var user_id = this.getUserID();
        return axios
                .post(API_URL + "getByUserId", {
                  user_id
                })
                .then(response => {
                  if (response.data.success) {
                    var Schedules = response.data.data;
                    localStorage.setItem("Schedules", JSON.stringify(Schedules));
                  }
                  return response;
                });
      }
}

export default new ScheduleService();