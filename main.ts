music.play(music.stringPlayable("C5 B - - F G D C ", 120), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0078000408020100001c00010a006400f40164000004000000000000000000000000000500000436000400080002202908000c000124100014000222271400180002222518001c000222291c0020000224252000240002252728002c000127`), music.PlaybackMode.UntilDone)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
