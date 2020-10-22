import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

export default function () {

    const [atualizando, setAtualizando] = useState(false);
    function aoAtualizando() {
        setAtualizando(true);
        setTimeout(() => { setAtualizando(false) }, 3000);
    }

    return (
        <View style1={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#333', padding: 15 }}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizando}

                    />
                }

            >
                <Text style={{ color: '#eee' }}>
                    Laboris ipsum elit et laboris irure aute sint cupidatat ipsum eiusmod labore. Voluptate officia commodo sunt enim magna reprehenderit voluptate magna. Reprehenderit culpa sit ullamco dolore reprehenderit enim excepteur. Et eiusmod dolor et reprehenderit consequat est anim ex mollit non. Ipsum ea enim id eu ex occaecat ea nisi esse aliqua aliquip proident minim exercitation.

                    Irure minim sint sint incididunt. Occaecat quis velit non adipisicing duis mollit voluptate dolore culpa commodo voluptate. Magna ut occaecat quis minim occaecat esse qui dolore. Anim aute duis veniam ullamco culpa nisi eiusmod quis ad incididunt nostrud duis aute.

                    Qui cupidatat officia qui duis ea. Dolore ipsum dolore nisi elit enim velit eiusmod amet quis id in laborum aute. Mollit ad esse non excepteur proident ea reprehenderit fugiat eiusmod qui eiusmod amet. Irure elit deserunt magna et. Dolore voluptate minim quis eu. Proident dolor eu excepteur elit duis exercitation fugiat fugiat.

                    Qui Lorem velit consectetur exercitation exercitation culpa magna culpa Lorem id eiusmod elit labore Lorem. Incididunt quis laborum culpa ad nostrud. Ex excepteur sunt mollit sit mollit aute.

                    Sit ullamco Lorem proident dolore ea officia incididunt sint. Reprehenderit cupidatat irure ex deserunt duis aute adipisicing esse non ipsum. Pariatur qui dolor nulla esse ex reprehenderit nisi eu pariatur laborum ad. Mollit reprehenderit adipisicing incididunt deserunt voluptate qui in et commodo aliqua et.

                    Esse amet qui cillum ullamco ullamco minim ullamco ut ea ex. Laboris deserunt consequat qui tempor id laboris fugiat labore duis non velit commodo amet mollit. Ex est cillum minim fugiat commodo laboris quis eu excepteur dolore.

                    Qui sit irure proident sit anim. Officia eiusmod in eu elit incididunt elit consectetur adipisicing tempor anim. Veniam veniam Lorem tempor veniam eiusmod commodo fugiat tempor non ad magna ut adipisicing culpa. Sint officia nostrud mollit pariatur sunt esse non voluptate sint non magna et cupidatat excepteur. Cupidatat aute mollit mollit eu non sint consectetur eu est. Adipisicing veniam commodo aliqua do excepteur et tempor deserunt qui magna commodo occaecat. Adipisicing et mollit quis velit anim voluptate nisi deserunt anim ipsum.

                    Eu mollit nostrud incididunt occaecat aute exercitation incididunt fugiat. Ut ex deserunt non esse do aliqua sit. Amet adipisicing exercitation sint sunt id. Occaecat et fugiat nisi cillum ex velit occaecat ipsum.

                    Eu pariatur fugiat ex reprehenderit quis duis ad. Quis quis veniam aliqua sit velit elit culpa sint excepteur tempor exercitation. Mollit laboris ad dolore labore sit aute irure proident velit sit nisi.

                    Non nisi labore aliquip nostrud ut sunt in nisi id. Amet dolor nulla pariatur adipisicing ipsum nostrud nulla reprehenderit dolore mollit sit officia labore occaecat. Nulla officia voluptate nostrud quis quis laborum proident id et velit aute. Ipsum do proident culpa nulla quis velit sunt proident dolore dolor mollit. Magna qui proident reprehenderit labore pariatur aliquip veniam pariatur nulla ullamco est deserunt. Occaecat sit incididunt pariatur ea aute pariatur nisi occaecat est voluptate enim. Deserunt elit minim labore aute.
                </Text>
            </ScrollView>

        </View>
    )
}