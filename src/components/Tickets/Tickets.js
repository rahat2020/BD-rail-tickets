import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  export default function Tickets({ticket}){
    const classes = useStyles();
    const history = useHistory()
      const handleTicket = (bedType) => {
          history.push(`/book/${bedType}`);
      }
    return (
      <Card style={{marginRight:'15x'}} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {ticket.avatar}
            </Avatar>
          }
          title={ticket.title}
        />
  
        <CardMedia
          className={classes.media}
          image={ticket.imgUrl}
          title="Paella dish"
        />
        {/* <img src={`/images/${room.bedType}.png`} alt=""/> */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {ticket.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <LocalHotelIcon />: {room.bed}  */}
          </IconButton>

          {/* <IconButton aria-label="share">
            <WcIcon />: {ticket.capacity} 
          </IconButton> */}

          <IconButton aria-label="prices">
            <AttachMoneyIcon />: {ticket.prices} 
          </IconButton>

          <Button onClick={() => handleTicket(ticket.bedType)} variant="contained" color="primary">
              Book
          </Button>
        </CardActions>
      </Card>
    );
  }
  

// const Tickets = () => {
//     return (
//         <div>
//             <h2> this is Tickets</h2>
//         </div>
//     );
// };

// export default Tickets;