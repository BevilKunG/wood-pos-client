import React, { FC } from 'react'
import QRCode from 'qrcode.react'
import CoverSvg from '../assets/cover_image.svg'
import styled from 'styled-components'

const DetailContainer = styled.div`
  height: 90%;
`

const DetailContent = styled.div`
  height: calc(100% - 10rem);
`

const SideButtonContainer = styled.div`
  height: 10%;
`

const OutlinedButton = styled.button`
  background: white;
  color: #181f4e;
  border-color: #181f4e;
  border-width: 2px;

  &:hover {
    background: #181f4e;
    color: white;
  }

  &:focus {
    outline: none;
  }
`

const Tag = styled.span`
  background: #181f4e;
`

const SideDetail: FC = () => {
  return (
    <div className="w-80 p-2">
      <DetailContainer className="bg-white rounded overscroll-y-auto">
        <figure className="bg-gray-400 rounded-t">
          <img src={CoverSvg} className="object-contain w-full h-40" />
        </figure>

        <DetailContent className="flex flex-col justify-between p-4">
          <div>
            <h1 className="text-xl font-medium">ชื่อสินค้า</h1>

            <div className="flex flex-row justify-between items-center mt-2">
              <h4 className="text-md font-normal">ประเภท</h4>
              <Tag className="rounded px-1">
                <h5 className="text-xs text-white font-bold">ประตู</h5>
              </Tag>
            </div>

            <div className="mt-10 flex flex-col justify-around">
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-lg font-normal">ต้นทุน</h3>
                <h3 className="text-lg font-normal">100</h3>
              </div>

              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-lg font-normal">ราคาขาย</h3>
                <h3 className="text-lg font-normal">200</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <QRCode value="QRCODE" renderAs="svg" />
          </div>
        </DetailContent>
      </DetailContainer>

      <SideButtonContainer className="flex items-center">
        <OutlinedButton className="w-full py-1 rounded text-lg font-medium">
          แก้ไข
        </OutlinedButton>
      </SideButtonContainer>
    </div>
  )
}

const Stock: FC = () => {
  return (
    <div className="h-full flex flex-row">
      <div className="w-full"></div>
      <SideDetail />
    </div>
  )
}

export default Stock
