import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import '../styles/banner.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
      },
    },
        // button: {
        //   backgroundColor: 'white',
        //   height: '40px',
        //   borderRadius: '15px',
        //   // width: '120px'
        // }
  }),
);


const Banner = () =>  {
  const classes = useStyles();
  
  
    return (

       <div id="home" className="banner">
          <div className="container">
            <HomeContentWrapper>  
              {/* <div className="col-12 col-lg-12"> */}
                <span className="banner-title">One Day Decorating</span>
              {/* </div> */}
              {/* <div className="col-12 col-lg-12"> */}
                <div className={classes.root}>
                  <HeaderActionBtn variant="contained" color="#FFFFFF">
                    Contact
                  </HeaderActionBtn>
                </div>
              {/* </div> */}
            </HomeContentWrapper>
          </div>
       </div>
    );
}

export default Banner;

const HomeContentWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
`;
export const HeaderActionBtn = styled(({ ...props }) => <Button {...props} />)`
  && {
    margin-left: 10px;
    @media (max-width: 600px) {
      margin: 5px 10px 5px 0px;
    }
  }
`;