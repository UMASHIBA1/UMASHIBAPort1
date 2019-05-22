import * as React from 'react';
import { Typography, createStyles, Theme, Link } from '@material-ui/core';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';
import ColorObjController from '../../../systems/Colors/color-obj-controller';

const styles = (theme:Theme):StyleRules => createStyles({
    font: {
        fontSize: "36px",
        margin: "24px 0 0 56px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
            margin: '10px 0 0 20px'
        }
    },
    warningLine: {
        fontSize: "14px",
        marginLeft: "56px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            marginLeft: "20px"
        }
    },
    oneLine: {
        lineHeight: "1.6em"
    },
    multiLine: {
        lineHeight: "1.8em"
    },
    subTitle: {
        fontWeight: "bold"
    }
})

type Props = WithStyles<typeof styles>;

class AboutMeSenetence extends React.Component<Props> {
    
    render(){
        const colorObj: ColorObjController = new ColorObjController();
        return(
            <div>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("purple")[500]
                }}>
                CustVary
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                    様々なWebページに対してコメント、レビューができるウェブサービス<br/>
                    未だアカウント登録者知り合いのみ....<br/>
                    <Link href={"https://www.custvary.com"}>
                        Site Link
                    </Link>
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("teal")[500]
                }}>
                    このPortFolio
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                    インターンに行って技術勉強したいと思い、<br />
                    その際のアピールポイントになればと思って作りました。<br />
                    見ていて楽しいポートフォリオになるように頑張りました！<br />
                    <Link href={"https://github.com/UMASHIBA1/MyPortFolio1"}>
                        GitHub Code Link
                    </Link>
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles)(AboutMeSenetence);
