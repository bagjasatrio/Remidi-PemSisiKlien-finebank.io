/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/themeContext';
const Stepper = (props) => {
    const { desc } = props;

    const theme = useTheme();
    
    const {theme: themeMode } = useContext(ThemeContext);
    
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const dataNum = desc.length

    return (
        <>
        <div>{desc[activeStep]}</div>
        <MobileStepper
            variant="dots"
            steps={dataNum}
            position="static"
            activeStep={activeStep}
            sx={{ 
                maxWidth: "100%", 
                flexGrow: 1,
                "& .MuiMobileStepper-dot": {backgroundColor: "darkgray",},
                "& .MuiMobileStepper-dotActive": {backgroundColor: themeMode.color }
             }}
            nextButton={
                <Button size="small" onClick={handleNext} sx={{ color: "black", fontWeigt: "bold" }} disabled={activeStep === dataNum - 1}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} sx={{ color: "black", fontWeigt: "bold" }} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Previous
                </Button>
            }
        />
        </>
    );
}

export default Stepper