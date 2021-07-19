import React from 'react';
import { ContainerHome, HomeView, HomeButton, InputHome, ButtonText, View} from './styles';

export default function Home() {
    return (
        <ContainerHome>
            <HomeView>
                
                <HomeButton>
                    <ButtonText>Colaboradores</ButtonText>
                    </HomeButton>


                    <HomeButton>
                    <ButtonText>Treinamentos</ButtonText>
                    </HomeButton>

                 </HomeView>
        </ContainerHome>
    );
};

