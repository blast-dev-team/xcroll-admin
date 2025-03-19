import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { alpha, Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  customButton: {
    color: theme.palette.grey[800], // 'dark' color
    backgroundColor: alpha(theme.palette.grey[500], 0.08),
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));
interface GreyButtonProps {
  children: React.ReactNode;
  [key: string]: any; // 이 부분은 필요에 따라 세부적으로 타입을 지정해주시면 됩니다.
}
export default function GreyButton({ children, ...props }: GreyButtonProps) {
  const classes = useStyles();

  return (
    <Button className={classes.customButton} fullWidth {...props}>
      {children}
    </Button>
  );
}
