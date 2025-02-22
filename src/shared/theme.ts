/** 자주 사용하는 색상들 */
export const theme = {
  colors: {
    pkblue: "#1C6296",
    pkbeige: "#D6CCC2",
    pkivory: "#EDEDE9",
    pkpoint: "#d4364f",
    pksky: "#7ABFF2",
    pklightsky: "#DBEFFE",
  },
  fontSize: {
    xs: "8px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "24px",
    xxl: "36px",
  },
  mediaSize: {
    xs: "max-width: 480px",
    lg: "min-width: 640",
  },
  width: {
    s: "320px",
    m: "480px",
    l: "540px",
  },
};

// /** 유틸리티 */
// const util = {
//   truncate: () => css`
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   `,

//   scroll: () => css`
//     &::-webkit-scrollbar {
//       /** 스크롤바의 너비 */
//       width: 4px;
//     }
//     &::-webkit-scrollbar-thumb {
//       /** 스크롤바 길이 */
//       height: 25%;
//       /** 스크롤바의 색상 */
//       background: ${({ theme }) => theme.colors.indigo600};
//       border-radius: 10px;
//     }
//     &::-webkit-scrollbar-track {
//       /** 스크롤바 뒷 배경 색상 */
//       background: ${({ theme }) => theme.colors.indigo300};
//     }
//   `,
// };
