import React from 'react';

const FormsTemplate = (props) => {

  const renderForms = () => {
    const formsArray = [];
    // через props получаем данные из родительского компонента
    for(let elementName in props.formData) {
      formsArray.push({
        id: elementName,
        settings: props.formData
      });
    }
    return formsArray.map((item, i) => {
      return(
        <div key={i} className="form__element">
          {renderTemplates(item)}
        </div>
      );
    });
  };

  const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings;
    switch (values.element) {
    case('input'):
      <div>input</div>;
      break;
    default: formTemplate = null;
    }
  };

  return(
    <div>
      {renderForms()}
    </div>
  );

};

export default FormsTemplate;