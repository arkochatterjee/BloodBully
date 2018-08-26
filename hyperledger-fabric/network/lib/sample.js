/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.example.basic.SampleTransaction} tx The sample transaction instance.
 * @transaction
 */

var PacketStatus = {
    Created: {code: 1, text: 'Packet Created'},
    RequestTransfer: {code: 4, text: 'Packet is Requested for transfer.'},
    Transfered: {code: 2, text: 'Packet Transfered'},
    Received: {code: 3, text: 'Packet received by Patient '}
};
function CreatePacket(PacketNumber) {
    PacketNumber.blood.donor = PacketNumber.donor;
    PacketNumber.blood.PacketID = PacketNumber.Num;
    PacketNumber.blood.created = new Date().toISOString();
    PacketNumber.blood.status = JSON.stringify(PacketStatus.Created);
    return getAssetRegistry('org.acme.Z2BTestNetwork.Order')
        .then(function (assetRegistry) {
            return assetRegistry.update(PacketNumber.donor);
        });
}
function Deliver(PacketNumber) {
    if ((PacketNumber.blood.status = JSON.stringify(PacketStatus.Created)))
    {
        PacketNumber.blood.delivered = new Date().toISOString();
        purchase.blood.status = JSON.stringify(orderStatus.Delivered);
        return getAssetRegistry('org.acme.Z2BTestNetwork.Order')
            .then(function (assetRegistry) {
                return assetRegistry.update(PacketNumber.blood);
            });
    }
}
function transfer(PacketNumber) {
    if (PacketNumber.blood.status = JSON.stringify(PacketStatus.RequestTransfer))
    {
        PacketNumber.blood.donor = PacketNumber.donor;
        PacketNumber.blood.transfer = new Date().toISOString();
        PacketNumber.blood.status = JSON.stringify(PacketStatus.RequestTransfer);
        return getAssetRegistry('org.acme.Z2BTestNetwork.Order')
            .then(function (assetRegistry) {
                return assetRegistry.update(PacketNumber.order);
            });
    }
}