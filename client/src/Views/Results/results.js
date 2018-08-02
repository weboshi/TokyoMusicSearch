import React, { Component } from 'react';
import './results.scss'
import cheerio from 'cheerio';
import request from 'request';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Navbar3 } from '../../Components/Navbar3';
import { Footer } from '../../Components/Footer';



let artistPerforming = 0;

export default class resultPage extends Component {
    constructor(props) {
      super(props);
      this.changeDate = this.changeDate.bind(this);
      this.checkArtist = this.checkArtist.bind(this);
      this.state = {
        artist: this.props.location.state.artist,
        date: this.props.location.state.date,
      } 
     
    }
  
  changeDate() {
    const dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateChange = this.state.date;
    if (dateChange.charAt(0) == 0) {
      dateChange = dateChange.slice(1)
      Number(dateChange)
      dateChange = dateChange - 1
      console.log(dateChange)
      return dates[dateChange]
      console.log(dates[dateChange])
    }
    else {
      Number(dateChange)
      dateChange = dateChange - 1
      return dates[dateChange]
    } 
    return dates[dateChange]
  }

  checkPerforming() {
    for (let i=0;i<this.state.performingCheck.length;i++){
      if(this.state.performingCheck[0].performing == 0 ){

      }
    }
    this.state.performingCheck
  }
  
  mapVenues(){
    this.state.performingCheck.map((item, i) => 
     <div className="artistPerforming">
       <li key={i}>{item.venue}</li>
       <li key={i}><a href={item.link + this.state.date}> {item.link + this.state.date}</a></li>
      </div>
    )
  }

  checkArtist() {
    const artist = this.state.artist;
    const date = this.state.date.toString();
    let performing = [];
    const venues = [
      {venue:'Zepp Tokyo', 
      link:"http://hall.zepp.co.jp/tokyo/schedule.html?year=2018&month="},
      {venue:"Zepp Divercity Tokyo",
      link: "http://hall.zepp.co.jp/divercity/schedule.html?year=2018&month="},
      {venue:"Toyosu Pit",
      link: "http://toyosu-pit.team-smile.org/schedule?p1=2018&p2="},
      {venue:"Liquid Room",
      link: "https://www.liquidroom.net/schedule/2018/"},
      {venue: "Akasaka Blitz",
      link: "http://www.tbs.co.jp/blitz/schedule/2018"},
      {venue: "The Room", link: "http://www.theroom.jp/schedule/2018/"},
      {venue: "Shinjuku Loft", link: " http://www.loft-prj.co.jp/schedule/loft/date/2018/"},
      {venue: "Shibuya Quattro", link: "http://www.club-quattro.com/shibuya/schedule/?ym=2018"},
      {venue: "WWW", link: "http://www-shibuya.jp/schedule/#wwwxwww/2018"},
      {venue: "Shimokitazawa SHELTER", link: "http://www.loft-prj.co.jp/schedule/shelter/date/2018/"},
      {venue: "LOFT/PLUS ONE", link: "http://www.loft-prj.co.jp/schedule/plusone/date/2018/"},
      {venue: "LOFT9 Shibuya", link: "http://www.loft-prj.co.jp/schedule/loft9/date/2018/"},
      {venue:"Naked Loft", link: "http://www.loft-prj.co.jp/schedule/naked/date/2018/"},
      {venue: "Asagaya / Loft A", link: "http://www.loft-prj.co.jp/schedule/lofta/date/2018/"},
      {venue: "Studio Coast", link: " http://www.studio-coast.com/2018/"},
      {venue: "Garage", link: " http://www.garage.or.jp/date/2018/"},
      {venue: "Loft PlusOne West", link: "http://www.loft-prj.co.jp/schedule/west/date/2018/"},
      {venue: "Rock Cafe Loft", link: "http://www.loft-prj.co.jp/schedule/rockcafe/date/2018/"},
      {venue: "Loft Heaven", link: "http://www.loft-prj.co.jp/schedule/heaven/date/2018/"},
      {venue: "Basement Bar", link: "http://toos.co.jp/basementbar/event/on/2018/"},
      {venue: "Super Deluxe", link: "https://www.super-deluxe.com/2018/"},
      {venue: "Chop Tokyo", link: " http://www.chop-tokyo.info/schedule/2018"},
      {venue: "Mismatch Ikebekuro", link: "http://mismatchikebukuro.com/schedule.php?id=2018"},]
    let results = [];
    let doSetState = () => {
      console.log(artistPerforming)
      if(artistPerforming == 1){
      this.setState({
      performingCheck: performing,
      isArtistPerforming: 1
    })}
    else {
        this.setState({
        performingCheck: performing,
        isArtistPerforming: 0,
      })
    }
  };
  let b = 0
      for (let i=0;i<venues.length;i++) { 
        request(venues[i].link + date, function(error, response, html) {
          var $ = cheerio.load(html);
          var check3 = $('div:icontains("' + artist + '")').length
          results.push({
            check3: check3,
           });
        
          if (check3 > 0) {
            artistPerforming = 1;
            console.log ('Performing! Visit the venue schedule to find out more!')
            var newObject = {venue: venues[i].venue, link: venues[i].link, performing: 1};
            performing.push(newObject)
            
          }
          else {
            console.log('No performances found')
       
          }
          b = b + 1
          console.log(b)
          if(b === venues.length - 1) {
               doSetState();
          };
          
        });
    }
  }

  componentDidMount() {
    this.checkArtist()
  }
  
  render() {
    return (
      <div className='results-container'>
        <Navbar3/>
        {this.state.isArtistPerforming == 1 &&
        <div className='mainDiv'>
          <div className="artistPerforming"><h1 style={{marginBottom: '30px'}}> {this.state.artist} is performing in {this.changeDate()}! <i class="far fa-smile-beam"></i> </h1>
          {this.state.performingCheck.map((item, i) => 
              <div key={i} style={{marginBottom:'20px'}}>
                <Paper elevation={1} style={{padding:'30px', margin: 'auto'}}>
                  <Typography variant="headline" component="h3" style={{fontSize:'25px'}}>
                  <li key={i}>{item.venue}</li>
                  </Typography>
                  <Typography component="p" style={{fontSize:'15px'}}>
                    <li key={i}><a href={item.link + this.state.date}> {item.link + this.state.date}</a> </li>
                  </Typography>
                </Paper>
              </div>
          )} 
          </div>
        </div>
        }
        {this.state.isArtistPerforming == 0 && 
          <div className="noPerformancesFound">No performances found for that month.<i class="far fa-sad-cry"></i>
          </div>
        }
        {this.state.isArtistPerforming == undefined  && 
        <div className="loadingScreen"><CircularProgress color="secondary" thickness={7}/></div>
        }

      </div>
  )}
 }
