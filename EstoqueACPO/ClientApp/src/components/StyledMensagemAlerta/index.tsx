import React from 'react';
import './StyledMensagemAlerta.css';

import { FormikErrors } from 'formik';

export type MensagemKey = 'sucesso' | 'alerta' | 'erro';

interface IProps {
  tipo: MensagemKey;
  unica?: boolean;
  formikMessages?: FormikErrors<any>;
}

const StyledMensagemAlerta = ({ tipo, unica, formikMessages }: IProps) => {
  const yupMessages = Boolean(formikMessages)
    ? Object.entries(formikMessages as FormikErrors<any>)
        .map(error => error[1] || '')
        .filter(err => Boolean(err))
    : [];

  if (yupMessages && yupMessages.length > 0) {
    return unica && yupMessages.length === 1 ? (
      <p className={`mensagem-${tipo}`}>{yupMessages && yupMessages[0] !== '' && yupMessages[0]}</p>
    ) : (
      <div className={`mensagem-${tipo}`}>
        <ul>
          {yupMessages.map((message, index) => (
            <li key={`${index + 1}`}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default StyledMensagemAlerta;
