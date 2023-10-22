import styled from "styled-components";
import { Petition, PetitionStatus } from "./Petition.types";

export const ICON_SIZE = "30";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[10]};
  padding-inline: 20px;
  min-height: 100vh;
  gap: 20px;
`;

export const DEFAULT_PETITION: Petition = {
    id: 'e319d5f9-fb8e-494e-8a8a-0f4fcf95591f',
    status: PetitionStatus.PENDING,
    title: 'Montaż lamp świetlnych',
    location: 'Tryciąż, ul. Obrońców Pokoju',
    description: 'W trosce o dobro, mienie i zdrowie mieszkańców naszej ulicy, powinniśmy zamontować lampy świetlne.',
    author: 'Magdalena Pawlak',
    authorId: '1',
    signedBy: [
        '7ea6ffc0-d513-48f4-bd6d-34e7b0e9a277',
        'e0e6d9e3-0c5c-4d7d-9c7d-5c7c7f7a5d7f',
        'c3a5e0d7-2f1a-4d6d-9d7e-2d4b5c6d7e8f',
        'b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e',
        '6f7e8d9c-5b4a-3d2c-1e0f-9a8b7c6d5e4',
        '3c2b1a0f-e4d5c6b7-8a9e-0d1f-2e3d4c5b6a',
        '7e8f9a0b-c5d4e3f2-1a2b3c4d5e6',
        '7c6d5e4f-3a2b1c0d-e9f8a7b6c5',
        '4d5e6f7a-8b9c0d1e-2f3a4b5c6d7',
        '8e7d6c5b-4a3f2e1d-9c0b1a2f3e4',
        '5c6d7e8f-9a0b1c2d-3e4f5a6b7c8',
        'd9e8f7a6-5b4c3d2e-1f0a9b8c7d6',
        '5e4d3c2b-1a0f9e8d-7c6b5a4f3e2',
        '1d2e3f4a-5b6c7d8e-9f0a1b2c3d4',
        '5e6f7a8b-9c0d1e2f-3a4b5c6d7e8',
        'd4c5b6a7-8f9e0d1c-2b3a4f5e6d7',
        '8c7b6a5f-4e3d2c1b-0a9f8e7d6c5',
        '4b5c6d7e-8f9a0b1c-2d3e4f5a6b7',
        'c6d5e4f3-2a1b0c9d-8e7f6a5b4c3',
        'd2e3f4a5-6b7c8d9e-0f1a2b3c4d5',
        'e6f7a8b9-0c1d2e3f-4a5b6c7d8e9',
        'c5b4a3f2-1e0d9c8b-7a6f5e4d3c2',
        'b7c8d9e0-1f2a3b4c-5d6e7f8a9b',
        '6c5b4a3f-2e1d0c9b-8a7f6e5d4c3',
        '2b1a0f9e-8d7c6b5a-4f3e2d1c0b9',
        '8f9e0d1c-2b3a4f5e-6d7c8b9a0f1',
        'a0b1c2d3-4e5f6a7b-8c9d0e1f2a3',
        'b6c5d4e3-1a0f9e8d-7c6b5a4f3e2',
        'd1e2f3a4-5b6c7d8e-9f0a1b2c3d4',
        '5c6d7e8f-9a0b1c2d-3e4f5a6b7c8',
        'd9e8f7a6-5b4c3d2e-1f0a9b8c7d6',
        '5e4d3c2b-1a0f9e8d-7c6b5a4f3e2',
        '1d2e3f4a-5b6c7d8e-9f0a1b2c3d4',
        '5e6f7a8b-9c0d1e2f-3a4b5c6d7e8',
        'd4c5b6a7-8f9e0d1c-2b3a4f5e6d7',
        '8c7b6a5f-4e3d2c1b-0a9f8e7d6c5',
        '4b5c6d7e-8f9a0b1c-2d3e4f5a6b7',
        'c6d5e4f3-2a1b0c9d-8e7f6a5b4c3',
        'd2e3f4a5-6b7c8d9e-0f1a2b3c4d5',
        'e6f7a8b9-0c1d2e3f-4a5b6c7d8e9',
        'c5b4a3f2-1e0d9c8b-7a6f5e4d3c2',
        'b7c8d9e0-1f2a3b4c-5d6e7f8a9b',
        '6c5b4a3f-2e1d0c9b-8a7f6e5d4c3',
        '2b1a0f9e-8d7c6b5a-4f3e2d1c0b9',
        '8f9e0d1c-2b3a4f5e-6d7c8b9a0f1',
        'a0b1c2d3-4e5f6a7b-8c9d0e1f2a3',
        'b6c5d4e3-1a0f9e8d-7c6b5a4f3e2',
        'd1e2f3a4-5b6c7d8e-9f0a1b2c3d4',
        '5c6d7e8f-9a0b1c2d-3e4f5a6b7c8',
        'd9e8f7a6-5b4c3d2e-1f0a9b8c7d6',
        '5e4d3c2b-1a0f9e8d-7c6b5a4f3e2',
        '1d2e3f4a-5b6c7d8e-9f0a1b2c3d4',
        '5e6f7a8b-9c0d1e2f-3a4b5c6d7e8',
        'd4c5b6a7-8f9e0d1c-2b3a4f5e6d7',
        '8c7b6a5f-4e3d2c1b-0a9f8e7d6c5',
        '4b5c6d7e-8f9a0b1c-2d3e4f5a6b7',
        'c6d5e4f3-2a1b0c9d-8e7f6a5b4c3',
        'd2e3f4a5-6b7c8d9e-0f1a2b3c4d5',
        'e6f7a8b9-0c1d2e3f-4a5b6c7d8e9',
        'c5b4a3f2-1e0d9c8b-7a6f5e4d3c2',
        'b7c8d9e0-1f2a3b4c-5d6e7f8a9b',
        '6c5b4a3f-2e1d0c9b-8a7f6e5d4c3',
        '2b1a0f9e-8d7c6b5a-4f3e2d1c0b9',
        '8f9e0d1c-2b3a4f5e-6d7c8b9a0f1',
        'a0b1c2d3-4e5f6a7b-8c9d0e1f2a3',
        'b6c5d4e3-1a0f9e8d-7c6b5a4f3e2',
        'd1e2f3a4-5b6c7d8e-9f0a1b2c3d4',
        '5c6d7e8f-9a0b1c2d-3e4f5a6b7c8',
        'd9e8f7a6-5b4c3d2e-1f0a9b8c7d6',
        '5e4d3c2b-1a0f9e8d-7c6b5a4f3e2',
        '1d2e3f4a-5b6c7d8e-9f0a1b2c3d4',
        '5e6f7a8b-9c0d1e2f-3a4b5c6d7e8',
        'd4c5b6a7-8f9e0d1c-2b3a4f5e6d7',
        '8c7b6a5f-4e3d2c1b-0a9f8e7d6c5',
        '4b5c6d7e-8f9a0b1c-2d3e4f5a6b7',
        'c6d5e4f3-2a1b0c9d-8e7f6a5b4c3',
        'd2e3f4a5-6b7c8d9e-0f1a2b3c4d5',
        'e6f7a8b9-0c1d2e3f-4a5b6c7d8e9',
        'c5b4a3f2-1e0d9c8b-7a6f5e4d3c2',
        'b7c8d9e0-1f2a3b4c-5d6e7f8a9b',
        '6c5b4a3f-2e1d0c9b-8a7f6e5d4c3',
        '2b1a0f9e-8d7c6b5a-4f3e2d1c0b9',
    ],
    creationDate: 1697923803277,
    recipient: null,
    targetSignatures: 50,
    content: 'W imieniu mieszkańców domów położonych przy ul. Obrońców Pokoju w Kolbuszowej, zwracam się z prośbą o montaż oświetlenia (lampy) przy przejściach dla pieszych na głównej drodze w okolicach skrzyżowania ul. Św. Brata Alberta i ul. Obrońców Pokoju, na zlokalizowanych słupach energetycznych linii napowietrznej.\n' +
    '\n' +
    'Brak dodatkowego oświetlenia od strony ul. Nowa Wieś jest szczególnie niebezpieczny wieczorami, a zwłaszcza w sezonie zimowym, podczas deszczu i o zmierzchu, gdy dni są krótkie. Sam osobiście znalazłem się w sytuacji zagrażającej mojemu życiu, kiedy przechodziłem przez te przejście, a kierowcy nie widzieli mnie ze względu na brak odpowiedniego oświetlenia (jest bardzo ciemno). Istnieje wiele innych osób, które były w tej samej sytuacji co ja, zwłaszcza osoby starsze i dzieci.\n' +
    '\n' +
    'W trosce o dobro, mienie i zdrowie mieszkańców naszej ulicy, proszę o pozytywne rozpatrzenie naszej prośby oraz nadanie priorytetu naszym obawom.',
    response: ''
};
