import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

import { Result } from 'antd';

import { Block } from '../../../components';
import { userAPI } from '../../../utils/api';


const renderInfo = ({ hash, verified }) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Successfully Confirmed',
        message: 'Successfully account confirmed!'
      };
    } else {
      return {
        status: 'error',
        title: 'Confirmation Error',
        message: 'Account verification error!'
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Сonfirm Your Email',
      message: 'Please check your email for verify your account. Sometimes spam filters block automated emails. If you do not find the email in your inbox, please check your spam filter or bulk email folder.'
    };
  }
};

const VerifyEmailForm = ({ location, history }) => {
  const hash = location.search.split("hash=")[1];
  const [verified, setVerified] = useState(false);
  const [info, setInfo] = useState(renderInfo({ hash, verified }));

  const setStatus = ({ verified }) => {
    setInfo(renderInfo({ hash, verified }))
    setVerified(verified)
  }

  useEffect(() => {
    if (hash) {
      userAPI
        .verifyHash(hash)
        .then(() => {
          setStatus({ verified: true });
        })
        .catch(() => {
          setStatus({ verified: false });
        });
    }
  }, []);

  return (
    <div className="auth__success-block">
      <Block>
        <Result
          status={info.status}
          title={info.title}
          subTitle={info.message}
          extra={
            info.status === 'success' &&
            verified && (
              <Button type="primary" onClick={() => history.push('/signin')}>
                Log in
            </Button>
            )
          }
        />
      </Block>
    </div>
  );
}

export default VerifyEmailForm;