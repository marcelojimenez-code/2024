import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import FormInitial from "../Forms/FormInitial";
import FormHechos from "../Forms/FormHechos";
import FormVictim from "../Forms/FormVictim";
import FormDenunciante from "../Forms/FormDenunciante";


export default function withFontAwsome() {
  const handleComplete = () => {
    alert("Form completed!");
  };


  return (
    <>
      <div className="container">
        <div className="row">
            <FormWizard 
                onComplete={handleComplete} 
                color="#fa7901"
                nextButtonText="Siguiente"
                backButtonText="Anterior"
                finishButtonText="Final"
            >
                <FormWizard.TabContent title="Denuncia" icon="fa fa-search">
                    <FormInitial />
                </FormWizard.TabContent>
                
                <FormWizard.TabContent title="Antecedentes del Denunciante" icon="fa fa-user">
                    <FormDenunciante />
                </FormWizard.TabContent>
                
                <FormWizard.TabContent title="Antecedentes de la Víctima" icon="fa fa-address-card">
                    <FormVictim />
                </FormWizard.TabContent>
                
                <FormWizard.TabContent title="Antecedentes del Imputado" icon="fa fa-address-card">
                    <FormVictim />
                </FormWizard.TabContent>
                
                <FormWizard.TabContent title="Hechos que se denuncian" icon="fa fa-archive">
                  <FormHechos />
                </FormWizard.TabContent>
            </FormWizard>
            {/* add style */}
            <style>{`
              @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
            `}</style>
        </div>
      </div>
    </>
  );
}
