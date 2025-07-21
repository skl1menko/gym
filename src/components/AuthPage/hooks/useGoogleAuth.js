import { useGoogleLogin } from '@react-oauth/google';

const useGoogleAuth = () => {
    return useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            console.log('Google Login Success:', credentialResponse);

            try {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credentialResponse.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${credentialResponse.access_token}`,
                        Accept: 'application/json'
                    }
                });

                const userInfo = await response.json();
                console.log('User Info:', userInfo);
                // Здесь обрабатываем полученную информацию о пользователе
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
        onError: (error) => {
            console.error('Google Login Failed:', error);
            // Handle login error
        }
    });
};

export default useGoogleAuth;
