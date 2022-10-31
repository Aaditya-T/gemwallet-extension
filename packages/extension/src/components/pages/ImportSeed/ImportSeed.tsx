import { FC, useCallback, useState } from 'react';
import { SecretSeed } from './SecretSeed';
import { CreatePassword } from '../CreatePassword';
import { Congratulations } from '../Congratulations';

const STEPS = 3;

export const ImportSeed: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  if (activeStep === 2) {
    return <Congratulations activeStep={activeStep} steps={STEPS} handleBack={handleBack} />;
  }

  if (activeStep === 1) {
    return (
      <CreatePassword
        activeStep={activeStep}
        steps={STEPS}
        handleBack={handleBack}
        setActiveStep={setActiveStep}
      />
    );
  }

  return (
    <SecretSeed
      activeStep={activeStep}
      steps={STEPS}
      handleBack={handleBack}
      setActiveStep={setActiveStep}
    />
  );
};
